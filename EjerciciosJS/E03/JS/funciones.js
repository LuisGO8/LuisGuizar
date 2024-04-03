function limpiar(){
    document.getElementById('cTienda').reset();
}


function calcular(){
    var precioO = parseInt(document.getElementById('precio-original').value);
    

    if (isNaN(precioO)) {
        alert("Debes de ingresar datos válidos (números)" );
        return;
    }

    document.getElementById('total').innerHTML = precioO - precioO*0.15;
}