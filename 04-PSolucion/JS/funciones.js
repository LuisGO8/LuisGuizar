//Submit toda la informacion del formulario 
//Vamos ac crear una funcion que se encargue de poder validar que existan unicamente numeros dentro del campo de inversioón
function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;//Trae toda la información
    //El operador ternario funciona para poner a prueba todos los datos (un evento que viene por parte del codigo de la tecla lo demás no importa)
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);//Unicamente permite escribir numeros
}

function interes(){
    var valor = document.getElementById('cantidadi').value;

    var parseo = parseFloat(valor);
    var interes = parseo*(0.037/12);
    var total = interes + parseo;

    document.getElementById('saldoi').value = "$" + total;
}

function borrar(){
    document.getElementById('saldoi').value = "";
    document.getElementById('cantidadi').value = "";
}