/*
Vamos a crear nuestro propio servidor
*/

const { log } = require('console');
var http = require('http');

//Todo servidor debe de poder atender peticiones y debe de generar respuestas por lo tanto nuestra funcion tiene dos parametros request, response

var servidor = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/html;charset=uft-8'})
    response.write('<h2>Hola mundo este es mi primer servidor que hace lo mismo que todos los demas, pero en chiquito, Nombre: Guízar Joosé Luis</h2>');
    console.log('Se hizo una petición');
    response.end();
})

//En que puerto funciona el servidor

servidor.listen(3000);

//Ejecutamos en consola

console.log("Ejecutamos el servidor en puerto 3000");