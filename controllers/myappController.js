var conexion = require('../config/conexion');
var myapp = require('../model/myapp');
module.exports={

    index:function(req,res){
        myapp.obtener(conexion,function(err,datos){
            console.log(datos);
            res.render('myapp/users', { title: 'MyAPP', usuarios:datos});
    });
    },
    crear:function(req,res){
        res.render('myapp/crear');
    },
    guardar:function(req,res){
        console.log("inicia el body");
        console.log(req.body);
        console.log("termina el body");
        
        
            
    }

}