/** 
JS es un lenguaje de programación multiparadigma acepta programación funcional, estructurada, POO, eventos
Dentro de JS no existe entero, double, float, string, etc (No tipado)
Para le manejo de variables con tipo de dato existe el estándar ES6 el cual nos dice que para el manejo de variables teneos:
VAR LET CONST
*/

//Vamos a hacer una función para comprobar que el campo nombre sea mayor a tres caracteres
function validar(formulario){
    if(formulario.nombre.value.length <3){
        alert("Por favor escribe mas de 3 caracteres para el nombre");
        formulario.nombre.focus();//Metodo focus (indicador del mouse se quede en donde sucedio el error)
        return false;
    }

    var abcOK = "qwertyuuiopasdfghjklñzxcvbnm" + "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    var checkStr = formulario.nombre.value;
    alert(checkStr);
    
    var allValido = true;
//Vamos a hacer un bucle mediante el cual primero obtenga la cadena del nombre y lo separe en caracteres, una vez que tenga el carácter debo compáralo con la cadena que en este comento estoy considerando como la verdad absoluto y si después de recorrer toda la cadena encuentra que el carácter no se encuentra envía error 
    for(var i = 0; i< checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido = false;
            break;
        }
        if(!allValido){
            alert("Escriba unicamente letras en el campo del nombre");
            formulario.edad.focus();
            return false;
        }
    }
    
//EDAD (Numeros)
    var abcOK = "1234567890"
    var checkStr = formulario.edad.value;
    alert(checkStr);
    
    var allValido = true;
    for(var i = 0; i< checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracteres == abcOK.charAt(j)){
                break;
            }
        }
        if(j == abcOK.length){
            allValido = false;
            break;
        }
        if(!allValido){
            alert("Escriba unicamente numeros en el campo del edad");
            formulario.edad.focus();
            return false;
        }
    }
//Funcion para validar el correo es necesario contar con una expresion regular porque tenemos un formato el cual es:
//texto.texto@texto.texto
    var b =/^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;
    var txt = formulario.correo.value;

    alert("Email" + (b.test(txt)?"":"no")+ " valido")//? operador ternario (if corto)
    return b.test;
}