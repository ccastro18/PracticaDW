var mysql = require('mysql');
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "dw_practica"
    }
);
con.connect(
    (err)=>{
        if(!err){
        console.log("Conectado a BD");
    }else{
        console.log("No se conecto a BD");
    }
    }
);
module.exports = con;