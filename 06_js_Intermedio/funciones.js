/*
Java script maneja variables del siguinete modo

var -> una variable de acceso local que cualquiera puede hacer suo de ella.
let -> Es una variable "protegida" solo se pude hacer uso dentro de la funcion una variable local mas no global
const -> es una contstante, significa que su valor no puede cambiar

``= modificador de html

Ejemplo: 

var x = "hola";

let x ="habia una vez";


if(true){

}

console.log(x);



//quiero desarrollar una funciond e suma
function suma(n1, n2){
    return n1+n2;
}
console.log(`Esta es la suma: ${suma(4,5)} `);

//funciones flecha , estas nos ayudan a poder realizar operaciones de una forma mas sencill y su estructura es la siguiente:
//"cadena"-> id, clase, nombre, atributo

const sumarFlecha=(n1, n2) => n1+n2;
console.log(`Esta es la suma: ${sumarFlecha(10,5)} `);



const razasDePerros = [
    "Gran Danes",
    "pastor Aleman",
    "Chihuahua",
    "Betoven",
    "Belgua",
    "Dalmata",
    "Pitbull",
    "San Bernardo"

];

//queremos recorrerlo e imprimirlo
//for
for(let i=0; i<razasDePerros.length; i++){
    console.log(razasDePerros[i]);
}

const razasDePerros = [
    "Gran Danes",
    "pastor Aleman",
    "Chihuahua",
    "Betoven",
    "Belgua",
    "Dalmata",
    "Pitbull",
    "San Bernardo"

];

for(const raza of razasDePerros){
    console.log(raza)
}


const razasDePerros = [
    "Gran Danes",
    "pastor Aleman",
    "Chihuahua",
    "Betoven",
    "Belgua",
    "Dalmata",
    "Pitbull",
    "San Bernardo"

];
for(const indice in razasDePerros){
    console.log(razasDePerros[indice])
}

for(const indice in razasDePerros){
    console.log(razasDePerros)
}

*/

const razasDePerros = [
    "Gran Danes",
    "pastor Aleman",
    "Chihuahua",
    "Betoven",
    "Belgua",
    "Dalmata",
    "Pitbull",
    "San Bernardo", 
    "El perro de progra"

];

//forEach itera sobre lo elementos del arreglo y no devuelve nada
//todos los forEach son funciones flecha por defecto

//razasDePerros.forEach((raza, inidce, razasDePerros)=> console.log(raza))

//la estructura general del forEach 
//argumento.forEach((raza, indice, arregloOriginal)=>lo que quiero que haga

//funcion MAP
//itera sobre lo elementos del arreglo y regresa un arreglo diferente con el cual podemos

//const razasDePerrosENMAYUSCULAS = razasDePerros.map((raza)=>console.log(raza.toUpperCase()));

//find
//nos permite realizar una busqueda dentro del arreglo, si lo encuentra, lo retorna sino lanza un "undefinend"
//por ejemplo yo quiero buscar dentrod el arreglo si existe la raza Chihuahua

/* if(razasDePerros.find((raza)=>raza === "Chihuahua")){
    console.log("la raza se encuentra dentro del arreglo");
    console.log(razasDePerros);
}else{
    //hay que meterlo
    razasDePerros.push("Chihuahua");
    console.log(razasDePerros);
}
*/

//findindex
//es muy similar al anterioir, relaliza una busqueda del elemento, pero en lugarde regressar el elemento, regresas su indice, sino lo encuentra nos devuelve un -1 "sale del arreglo, es decir, el arreglo va de 0 en adelante, sino existe se sale y manda -1, o sea, se regresa", esta funcion es particulamnete util en elemetos que necesitamos modificar de un arreglo original, dentro de una copia

const indiceChihuahua = razasDePerros.findIndex((raza)=>raza === "Chihuahua");

if(indiceChihuahua > -1){
    //el resultado si esta dntro del arreglo
console.log(razasDePerros[indiceChihuahua]);
//aparte le voy a decir que agregue un texto
razasDePerros[indiceChihuahua] += "(Es una raza de perros chiquita y escandalosa)";

console.log(razasDePerros[indiceChihuahua]);

}
