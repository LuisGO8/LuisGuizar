/*
Esta es tu primera APPI REsT, la cual nos permite obtner informacion sobre diferentes tipos de pokemos conforme a los que exista por parte del sitio 
Para ello lo primero que tenemos que estables es como se va a comunicar nuestra aplicacion con el servidor del sitio
 */

const pokeApiUrl = 'https://pokeapi.co/apo/v2/'

/*
Necesitamos un objeto que se encargue de obtener cada uno de los campos del DOM referentes con el uso de la API a partir de que el usuario 
ingresa el nombre del pomkemon, debemos realizar una peticion al sitio, devuelvo el nombre del pokemon para que realiza la busqueda y 
pueda obtener cada componenete que tengamos maquetado
*/

const pokedex = ()=>{
    //Cada star vamos a definir un arreglo para obtener cada estadistica
    const pokemonStatsElements = {
        hp : document.getElementById("pokemonStatHp"),
        attack : document.getElementById("pokemonStatAttack"),
        defense : document.getElementById("pokemonStatDefense"),
        specialAttack : document.getElementById("pokemonStatSpecialAttack"),
        specialDefense : document.getElementById("pokemonStatSpecialDefense"),
        speed : document.getElementById("pokemonStatSpeed")
    };

/*
    Necesitamos identificar la calse de cada pokemon y se aplica la CSS a dicha clase
*/
    let currentClaseType = null;
    //Necesitamos poder cambiar las imagenes del template, ya sea por la pokebola, no encontrado o la imagen del pokemon
    const imagenTemplate = "<img class='pokedisplat' src='{imgSrc}' alt='pokedisplat'>";//Variable principal para cambiar imagenes
    //Necesitamso un objeto que se encargue de guardar donde estan las imagenes que se van a ocupar para la pokedex
    const images = {
        imgPokemonNotFound : "../img/404.png",
        imgLoading : "../img/loading.gif"
    }

    //Necesitamos un objeto que se encargue de obtener cada una de las referencias de los elementos de informacion del pokemon
    const containers = {
        imagenContainer : document.getElementById("pokedisplay-container"),
        pokemonTypesContainer : document.getElementById("pokemonTypes"),
        pokemonNameElement : document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement : document.getElementById("pokemonAbilities"),
        pokemonMovesELement : document.getElementById("pokemonMoves"),
        pokemonIdElement : document.getElementById("pokemonId")
    };

    //Necesitamos un objeto que se encargue de obtener las referencias de cada uno de los botones de la Pokedex
    const buttons = {
        all : Array.from(document.getElementsByClassName("btn")),
        search : document.getElementById("btnSearch"),
        next : document.getElementById("btnUp"),
        previos : document.getElementById("btnDown")
    }

    //Necesitamos obtener la referencia una vez que el usuario haya escrito el nombre del pokemon
    const pokemonInput = document.getElementById("pokemonName");
    
    //cada una de las varibles obtine los elementos correspondientes en el HTMl y esto nos sirve para poder crear funciones especificas que se encarguen unicamente de una solo cosa
    /*Necesitamos de una funcion que obtenga los datos del pokemon una vez que se haya realizado la peticion con el nombre*/

    const processPokemonTypes = (pokemonData) =>{
        //Primero una varibale para obtener le tipo de pokemon
        let pokemonType = "";
        //Utilizamos la primera clase para dar el color de cada uno de los contenedores movimientos y habilidades del pokemon
        const firstClass = pokemon.Data.types[0].type.name
        //Types es un arreglo que se obtiene por parte de la poke api y nos responde por medio de un pokemon data el cual tenemos que recorrer para saber a que pokemon estamos buscando
        pokemonData.types.forEach((pokemonTypeData)=>{
            //Lo primero que vamos a necesitar es etiquetar la clse del tipo de pokemon
            pokemonType += `<span class="pokemon-type ${pokemonTypeData.type.name}">${pokemonTypeData.type.name}</span>`;
        });
        //Necitamos quitar la clase previa del contenedor cada vez que sea una nueva busqueda
        if(currentClaseType){
            containers.pokemonMovesELement.classList.remove(currentClaseType);
            containers.pokemonAbilitiesElement.classList.remove(currentClaseType);

        }
        //Los volvemos a agregar conforme a la primera clase

        containers.pokemonMovesELement.classList.add(firstClass);
        containers.pokemonAbilitiesElement.classList.add(firstClass);
        currentClaseType = firstClass;
        //Debo de agregar las etiquetas creadas previamente del for each()
        containers.pokemonTypesContainer.innerHTML = pokemonType;
    }
};

