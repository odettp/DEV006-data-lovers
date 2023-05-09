export function pokemonFilter(data, filterText) {
  return data.filter((pokemon) => {
    return pokemon.name.includes(filterText);
  });
}

export function pokemonSort(pokemonList, sortValue) {
  return pokemonList.sort((a, b) => {
    if (sortValue === "A-z") {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    } else if (sortValue === "Z-a") {
      return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
    }
  });
}
