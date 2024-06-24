//Primero tenemos que tener las librerias
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//Vamos a crear las primeras rutas 
var indexRouter = require('./routes/index');

//Ruta para usuarios
var usersRouter = require('./routes/users');


//Vamos a visulizar los elementos

var app = express();

//Vamos a visualizar la view
//Donde se encuentra cada archivo de cada vista 
app.set('views', path.join(__dirname, 'views'));
//Tengo que definir el tipo de plantilla
app.set('views engine', 'ejs');
//Vamos a usar la ruta, cada vez que quiera entrar redirecionalo a la ruta principal
app.use('/', indexRouter);
//Si hay mas rutas 
app.use('/users', usersRouter);

//Vamos a definir los directorios publicos
app.use(logger('dev'));
app.use(express,json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
//El usuario solo visualiza esta carpeta estatica, todo lo demás se encuentra oculto
app.use(express.static(path.join(__dirname, 'public')));

//Por si hay un error 404
app.use(function(req, res, next){
    next(createError(404));
});

//Para el manejo del handler
app.use(function(err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    //Vamos a un error 500
    res.status(err.status || 500);
    res.render('error');
});

//No se es necesario tener el servidor
module.exports = app;