var mysqlConnection=require(appDir+'/dbconfig');
var Payment={
  getAll:function(callback){
    return mysqlConnection.query("Select * from payments",callback);
  },
  getById:function(id, callback){
    return mysqlConnection.query("Select * from payments where id_order=?",[id],callback);
  },
  getByOrderId:function(id, callback){
    return mysqlConnection.query("Select * from payments where id_order=?",[id],callback);
  },
  getRow:function(id, field, callback){
    return mysqlConnection.query("Select "+field+" from bursaj_brand where id_order=?",[id],callback);
  },
  save:function(data,callback){
    return mysqlConnection.query("Insert into payments SET ?", data ,callback);
  },
  delete:function(id,callback){
    return mysqlConnection.query("delete from payments where id_order=?",[id],callback);
  },
  update:function(id,arr,callback){
    return mysqlConnection.query("update payments set ? where id_order=?",[arr,id],callback);
  }

};
module.exports=Payment;
