function limpiar(){
    document.getElementById('cFinal').reset();
}

function calcular(){
    var pParcial = parseInt(document.getElementById('primer-parcial').value);
    var sParcial = parseInt(document.getElementById('segundo-parcial').value);
    var tParcial = parseInt(document.getElementById('tercer-parcial').value);
    var eFinal = parseInt(document.getElementById('examen-final').value);
    var cTrabajo = parseInt(document.getElementById('calificacion-trabajo').value);

    if (isNaN(pParcial) || isNaN(sParcial) || isNaN(tParcial) || isNaN(eFinal) || isNaN(cTrabajo)) {
        alert("Debes de ingresar números positivos (rango 0-10)" );
        return;
    }

    if(pParcial>=0 && pParcial<=10 && sParcial>=0 && sParcial<=10 && tParcial>=0 && tParcial<=10 && eFinal>=0 && eFinal<=10 && cTrabajo>=0 && cTrabajo<=10){
        document.getElementById('caliFinal').innerHTML = ((pParcial + sParcial + tParcial)/3)*0.55 + eFinal*0.30 + cTrabajo*0.15;
    }else{
        alert("Debes de ingresar números positivos (rango 1-10)" );
        return false;
    }

}

document.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        calcular();
    }
})