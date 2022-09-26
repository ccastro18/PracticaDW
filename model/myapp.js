module.exports={

    obtener:function(conexion,funcion) {
        conexion.query('SELECT * FROM usuarios',funcion); 
    },
    insertar:function(conexion,datos,funcion) {
        conexion.query('INSERT INTO usuarios (user, password, foto) VALUES (?,?,?)',[datos.user,datos.password,datos.archivo],funcion);
    }
}