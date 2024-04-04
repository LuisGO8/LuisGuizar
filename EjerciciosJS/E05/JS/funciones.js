function limpiar(){
    document.getElementById('cPorcentajes').reset();
}
function calcular(){
    var pMujeres = parseInt(document.getElementById('total-mujeres').value);
    var pHombres = parseInt(document.getElementById('total-hombres').value);
    var tGrupo = pMujeres + pHombres;

    if (isNaN(pMujeres) || isNaN(pHombres)) {
        alert("Debes de ingresar datos numericos" );
        return;
    }

    if(pMujeres>=0 && pHombres>=0){
        document.getElementById('porcentaje-mujeres').innerHTML = (pMujeres*100)/tGrupo + '%';
        document.getElementById('porcentaje-hombres').innerHTML = (pHombres*100)/tGrupo + '%';
    }else{
        alert("No existen alumnos negativos");
        return false;
    }
}

document.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        calcular();
    }
})