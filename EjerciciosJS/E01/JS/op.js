function limpiar(){
    document.getElementById("capital").reset();
}

function calcular(){
    var dinero = parseFloat(document.getElementById('dinero').value);
    var mes = parseInt(document.getElementById('mes').value);

    if (isNaN(dinero) || isNaN(mes)) {
        alert("Debes de ingresar datos numéricos." );
        return;
    }
    
    if(mes >0){
        if(dinero>0){
            document.getElementById('imes').innerHTML = dinero*0.02;
            document.getElementById("resultado").innerHTML = dinero*mes*0.02 + dinero;
            document.getElementById('rmeses').innerHTML = mes;
        }else{
            alert("El dinero debe ser positivo");
            capital.dinero.focus();
            return false;
        }    
    }else{
        alert('Los meses no pueden ser negativos');
        capital.mes.focus();
        return false;
    }

    if(mes ===1){
        document.getElementById('nrmeses').innerHTML = ' mes';
    }else{
        document.getElementById('nrmeses').innerHTML = ' meses';
    }

}
//Evitar enviar el formulario
document.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        calcular();
    }
})