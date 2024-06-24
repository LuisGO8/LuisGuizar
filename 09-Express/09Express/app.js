var express = require('express');
//Tenmos que realizar una instancia del objeto para poder hacer uso de express
var app = express();//Los constructores funcionan para realizar instancias

/*
Para node tenemos que utilizar rutas de acceso a:
por medio de los metodos get, post, pust, delete 
En la web el metodo get es el por defecto (cuando se realiza una petición) no se pide algo
*/

app.get('/', function(req, res){
    //Debemos generar una respuesta del sitio
    res.send('Ruta de inicio');//Que vamos a enviar
});

//Levantamos el servidor

app.listen(3000, function(req, res){
    console.log('Servidor inicializado en el puerto 3000');
});