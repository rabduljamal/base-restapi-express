var controllers_router = function(){
  const MDTRNotif = require(appDir+'/controllers/MDTR/Notif');

  app.use('/481840REST/MDTR/Notif', MDTRNotif);
}

module.exports = controllers_router;
