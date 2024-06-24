/*Vamos a crear un arreglo que contenga todas las instrucciones para el juego*/
var instrucciones = [
    "Utiliza las flechas de navegación para mover las flechas",
    "Para ordenar las piezas guiate por la imagen objetivo"
];

/*Vamos a crear una variable para gueardar cual fue el ultimo movmiento*/
var movmientos = [

];

/*Vamos a crear una matriz que representa las posiciones de los rompecabezas*/

var rompe = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

var rompeCorrecta = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

/*Lo que se mueve del rompecabezas es una cordenada fila vs columna necesito una variable para guardar las posicion de la pieza que se mueve*/

var filaVacia = 2;
var columnaVacia = 2;

/*Ya que defini qye necesito ahora hay que estructurar las funciones
La primera funcion qe debe de estar en uso es la de instrucciones, dbe recoorer el arrglo e imprimirlo en el HTML
*/
function mostrarInstrucciones (instrucciones){
    for(var i=0; i < instrucciones.lenght; i++){
        //Debo mostrarlo en la lista
        mostrarInstruccionLista(instrucciones[i], "lista-instrucciones");
    }
};

function mostrarInstruccionLista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    //Debo agregar la etiqueta li
    var li = document.createElement("li");
    //Para agregarlo usamos text contend
    li.textContent = instruccion;
    ul.appendChild(li);
}

/*Vamos a crear una funcion para agregar la ultima dirección del movimiento*/
function agregarUltimoMovimietno(dirección){
    movmientos.push(dirección);
}

/*Necesito una funcion para saber si gane*/

function checarSiGano(){
    for(var i = 0; rompe.lenght; i++){
        for(var j = 0; rompe[i].length; j++){
            //Donde estoy
            var rompeActual = rompe[i][j];
            if(rompeActual !== rompeCorrecta[i][j]){
                return false;
            }
        }
    }

    return true;
};

/*Si realmente gane debo mostrarlo en HTML*/

function mostrarCartelGanador(){
    if(checarSiGano()){
        alert("A mimir");
    }
    return false;
};

/**Necesito una funcion para poder intercambiar las posiciones de la pieza vacia vs alguna otra
arreglo [1][2] = arreglo[0][0]
cuando lo intercambio
arreglo[0][0]= arreglo [1][2]
*/

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2){
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columnaPos2];
    //Intercambio
    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columnaPos2] = pos1;
};

/*Siempre debo de saber donde esta la pieza vacia*/

function actualizarPosicionVacia(nuevaFila, nuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;

}

/*Tenemos que checar si la posicion dentro del rompecabezas es la correcta*/

function posicionValida(fila, columna){
    return(fila >= 0 && fila <=2 && columna >= 0, columna <= 2);
}

/*Viene la parte del movimiento, cada pieza es un hueco dentro del amatriz y lo unico que se esta intercambiando son las posiciones de la matriz
sognifica que cuando yo tecllee las flechas de navegacion debo saber cual se presiono
arriba 38 abajo 40 iz<quierda 37 derecha 39

*/

function moverEnDireccion(dirección){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;
    //Si se mueve
    if(dirección == codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia = filaVacia + 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }else if(dirección == codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia - 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }else if(dirección == codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia + 1;
    }else if(dirección == codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia - 1;
    }
    //mandar a llamar a que la posicion sea valida y si no intercambiarla
    if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
        //<Tensgo que hacer una funcion qeu se encargue de intercambiar las posiciones
    }
}

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];


    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);
    //Debo crear otra funcion para que cambie las posiciones de la imagen

    intercambiarPosicionesDOM('pieza' +pieza1, 'pieza' +pieza2);

    if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFila, nuevaColumna);
        //Agrega el ultimo movimiento
        agregarUltimoMovimietno(dirección);
    }
}

function intercambiarPosicionesDOM(idPieza1, idPieza2){
    var elementoPieza1 = document.getElementById(idPieza1);
    var elementoPieza2 = document.getElementById(idPieza2);
    //Vamos a crear clon y puedo ocultar 
    var padre = elementoPieza1.parentNode;
    //var madre = elementoPieza2.parentNode;

    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2 = elementoPieza2.cloneNode(true);

    padre.replaceChild(cloneElemento1, elementoPieza1);
    padre.replaceChild(cloneElemento2, elementoPieza2);

}


var codigosDireccion = {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO : 40
};

//LA actualizacioin de los movimientos 

function actualizarUltimoMovimiento (dirección){
    var ultimoMov = document.getElementById('flecha');
    switch(dirección){
        case codigosDireccion.ARRIBA:
            ultimoMov.textContent = '↑';
            break;
        case codigosDireccion.ABAJO:
            ultimoMov.textContent = '↓';
            break;
        case codigosDireccion.IZQUIERDA:
            ultimoMov.textContent = '→';
            break;
        case codigosDireccion.DERECHA:
            ultimoMov.textContent = '←';
            break;
    }
}

function mezclarPiezas(veces){
    if(veces <= 0){
        alert("Asi no se puede");
        return;
    }
    //Vamos a meterlo por tiempo

    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA. codigosDireccion.IZQUIERDA, codigosDireccion.DERECHA];

    var dirección = direcciones[Math.floor(Math.random() * direcciones.length)];

    moverEnDireccion(dirección);

    setTimeout(function(){
        mezclarPiezas(veces - 1);
    }, 100);

    //Necesitamos saber que teclas esta tecleando el ultimo jugador

}

function capturarTeclas(){
    //Para saber que teclas esra oprimiendo necesitamos onkeydown
    document.body.onkeydown = (function(evento){
        if(evento.which === codigosDireccion.ARRIBA || evento.which === codigosDireccion.ABAJO || evento.which == codigosDireccion.DERECHA || evento.which === codigosDireccion.IZQUIERDA){
            moverEnDireccion(evento.which);
            actualizarUltimoMovimiento(evento.which);
            //Tengo que saber si gane
            var gano = checarSiGano();
            if(gano){
                setTimeout(function(){
                    mostrarCartelGanador()
                })
            }
            evento.preventDefault;
        }
    });
}


function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();
}

iniciar();
//Mando a llamar las instrucciones
mostrarInstrucciones(instrucciones);



