function limpiar(){
    document.getElementById('Cvendedor').reset();
}

function calcular(){
    var dinero = parseInt(document.getElementById('salarioN').value);
    var venta1 = parseInt(document.getElementById('venta1').value);
    var venta2 = parseInt(document.getElementById('venta2').value);
    var venta3 = parseInt(document.getElementById('venta3').value);

    if (isNaN(dinero) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
        alert("Debes de ingresar datos numéricos." );
        return;
    }

    if(dinero > 0 && venta1 > 0 && venta2 > 0 && venta3 > 0){
        document.getElementById('comision1').innerHTML = venta1*0.1;
        document.getElementById('comision2').innerHTML = venta2*0.1;
        document.getElementById('comision3').innerHTML = venta3*0.1;
        document.getElementById('comisiones').innerHTML = venta1*0.1 + venta2*0.1 + venta3*0.1;
        document.getElementById('total').innerHTML = venta1*0.1 + venta2*0.1 + venta3*0.1 + dinero;
    }else{
        alert("No pueden ser números negativos");
    }

}

document.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        calcular();
    }
})