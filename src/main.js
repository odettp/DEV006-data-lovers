
import pokemon from "./data/pokemon/pokemon.js";
import dataPokemon from "./data/pokemon/pokemon.js";
console.log(dataPokemon.pokemon)


//trajimos  la dataPokemon y con el forEach la recorrimos 
//para traer cada uno de los pokemon.
dataPokemon.pokemon.forEach ((pokemon)=>{  

    console.log(pokemon.name)
})    //

const markup = `
<ul class="pokemon">
    ${pokemon.map(pokemon => `* ${pokemon.name} is ${pokemon.generation * 7}
`).join('')}

`;
console.log()

//window.scrollTo(x-coord, y-coord)  hacer scroll en la las cards.

// window.scrollTo(0,1000);
