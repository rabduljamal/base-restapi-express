global.mysql = require('mysql');
global.express = require('express');
global.app = express();
global.bodyparser = require('body-parser');


class RestServer{
  constructor(){
    app.use(bodyparser.json());
	// app.use(bodyParser.json({limit: '150mb'}));
    global.date = require('date-format');
    global.async = require('async');
    this.setupPath();
    //this.setupAuth();
    this.setupLog();
    this.setupdb();
    this.setupRouter();
    this.setupHadleError();
  }

  setupPath(){
    var path = require('path');
    global.appDir = path.dirname(require.main.filename);
  }

  setupAuth(){
    const basicAuth = require('express-basic-auth')
    app.use(basicAuth({
        users: {'web1': 'web1'}
    }))
  }

  setupLog(){
    var dd= date("yy-MM-dd");
    global.SimpleNodeLogger = require('simple-node-logger');
    var opts = {
        logFilePath:'log/log-'+dd+'.log',
        timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
    };
    global.log = SimpleNodeLogger.createSimpleLogger( opts );
  }

  setupdb(){
    mysqlConnection=require(appDir+'/dbconfig');
  }

  setupRouter(){
    var models_router=require(appDir+'/routers/models_router');
    var controllers=require(appDir+'/routers/controllers_router');
    models_router();
    controllers();
  }

  setupHadleError(){
    app.use((req, res, next) => {
        const error = new Error('Not founds');
        error.status = 404;
        next(error);
    })

    app.use(function(err, req, res, next) {
       res.status(err.status || 500);
       res.json({
        message: err.message,
        error: err
      });
      //  res.render('error', {
      //      message: err.message,
      //      error: err
      //  });
    });

    process.on('uncaughtException', function (err) {
      console.log('Caught exception: ', err);
    });

  }

  log_error(message, err, res){
    log.error(message, JSON.stringify(err));
    res.status(500).json({
      status:'error',
      message: message,
      result:err
    });
    res.end();
  }


}

global.RestServerApp = new RestServer();

module.exports = app;
