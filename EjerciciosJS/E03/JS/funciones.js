function limpiar(){
    document.getElementById('cTienda').reset();
}


function calcular(){
    var precioO = parseInt(document.getElementById('precio-original').value);
    

    if (isNaN(precioO)) {
        alert("Debes de ingresar datos numéricos." );
        return;
    }

    if(precioO >0){
        document.getElementById('total').innerHTML = precioO - precioO*0.15;
    }else{
        alert('No se admiten valores negativos')
    }

}

document.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        calcular();
    }
})