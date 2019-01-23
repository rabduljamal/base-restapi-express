var mysql=require('mysql');
global.mysqlConnection = mysql.createPool({
        host: 'YOURHOST',
        user: 'YOURUSER',
        password: 'YOURPASS',
        database: 'YOURDB',
});

mysqlConnection.getConnection(function(err, connection) {
    if (!err)
        console.log('DB connection succeded...');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

 module.exports=mysqlConnection;
