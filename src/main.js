
import pokemon from "./data/pokemon/pokemon.js";

const printCard = (urlPokemon, namePokemon, numberPokemon, typePokemon) => {
 return `
   <divclass="card">
   <img
   src="${urlPokemon}"
   alt="${name}" class= "pokemon-img"
   />
   <div class = "pokemon-info">
     <p class="pokemon-number">
   ${numberPokemon}</p>
     <p class ="pokemon-name">
   ${namePokemon}</p>
     <div class = "type">
   <p class="fire">${typePokemon}</p>
      </div>
     </div>
   </div>`;
};




function displayPokemonList(pokemonList) {
  const pokemonListElement = document.getElementById("pokemon-list");
  pokemonListElement.innerHTML = "";



