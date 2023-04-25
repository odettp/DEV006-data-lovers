



// export const dataPokemon  = () => {
//  console.log(dataPokemon)
//  return "pokemon";
// };
// export const pokemonCard = [pokemon];
// console.log(pokemon)

export default pokemon;

// const filterDataPokemon = pokemon.filter(pokemon => pokemon.type === "poison" && pokemon.generation === "i");


// console.log(filterDataPokemon);


// sortData(data, sortBy, sortOrder)
// pokemon.sort();

// computeStats(data)


// fetch('https://pokeapi.co/api/v2/type/3')
//   .then(response => response.json())
//   .then(data => {
//     const pokemonOfType = data.pokemon.map(p => p.pokemon.name);
//     const filteredPokemon = pokemonOfType.filter(name => name.startsWith('b'));

//     console.log(filteredPokemon);
//   })
//   .catch(error => console.error(error));


    let pokemonData = [];

   
      pokemonList.forEach(pokemon => {
        const pokemonElement = document.createElement("div");
        pokemonElement.innerHTML = `
          <p>Name: ${pokemon.name}</p>
          <p><a href="${pokemon.url}" target="_blank">View details</a></p>
        `;
        pokemonListElement.appendChild(pokemonElement);
      });
    

    const pokemonSearchInput = document.getElementById("pokemon-search");
    pokemonSearchInput.addEventListener("input", event => {
      const searchQuery = event.target.value.toLowerCase();
      const filteredPokemon = pokemonData.filter(pokemon => pokemon.name.includes(searchQuery));
      displayPokemonList(filteredPokemon);
    });
    console.log(pokemonData)