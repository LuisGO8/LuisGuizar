function limpiar(){
    document.getElementById('cEdad').reset();
}

function calcular(){
    var añoN = parseInt(document.getElementById('añonacimiento').value);

    if (isNaN(añoN) || añoN>2024 || añoN<0) {
        alert("Debes de ingresar datos numericos validos" );
        cEdad.añonacimiento.focus();
        return;
    }

    document.getElementById('edad').innerHTML = 2024 - añoN + ' años';
}