var mysql = require('mysql2');
//Primero vamos a conectarla
var conexion = mysql.createConnection({
    host : 'localhost',
    database : 'alumnos4IV7',
    user : 'root',
    password : 'drn45&8'
});

//ejecutamos la conexion 
conexion.connect(function(error){
    if(error){
        throw error;
        console.log('Solo juguito contigo');
    }else{
        console.log('Si conected');
    }
});

/*
//vamos a agregar 
conexion.query('insert into registro(nombre, appat, apmat, correo, password) value ("José Luis", "Guízar", "Ortega", "jguizaro2200@alumno.ipn.mx", "54321")', function(error, respuesta){
    if(error){
        throw error;
        console.log('No se pudo insertar');
    }else{
        console.log('Resgistro exitoso, ', respuesta);
    }
});


//Borrar los datos del registro
conexion.query('delete from registro where boleta = 2', function(error, respuesta){
    if(error){
        throw error;
        console.log('No se puede elimar el registro');
    }else{
        console.log('Eliminación exitosa', respuesta);
    }
});

//Editar los datos del registro
conexion.query('update registro set nombre = "Valeria" where boleta = 4', function(error, respuesta){
    if(error){
        throw error;
        console.log('No se pudo modificar');
    }else{
        console.log('Modificación exitosa', respuesta);
    }
}); */

conexion.query('select * from registro', function(error, respuesta){
    if(error){
        throw error;
        console.log('No tablita');
    }else{
        //Como no se cuantos datos tengo debo de recorrer
        respuesta.forEach(respuesta => {
            console.log(respuesta);
        })
    }
});