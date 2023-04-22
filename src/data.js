import pokemon from "./data/pokemon/pokemon.js";

export * from "./data/pokemon/pokemon.js";



// export const dataPokemon  = () => {
//   console.log(dataPokemon)
//   return "pokemon";
// };
// export const property = pokemon;
// console.log(pokemon)


const pokemonData = [pokemon];

const filterDataPokemon = pokemon.filter(pokemon => pokemon.type === "poison" && pokemon.generation === "i");


console.log(filterDataPokemon);


sortData(data, sortBy, sortOrder)
pokemon.sort();

computeStats(data)


// const pokemonFilter = pokemon.filter (property => ((property.name)||(property.num))
// console.log (property)


// const pokemon = [num,type];
// function filteredPokemon = pokemon.filter((pokemon) => {
//   return pokemon.num === "001" && pokemon.type === 'poison';
// }).sort((a, b) => a.type - b.type)
// .map(pokemon => pokemon.name);


// console.log(filteredPokemon);


// const pokemonFilter= pokemon.filter (pokemon => pokemon.type ===type && pokemon.num);

// console.log(pokemonFilter);
