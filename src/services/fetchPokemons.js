const endpoint = "https://pokeapi.co/api/v2/pokemon/?limit=25";

const fetchPokemons = () => {
  return fetch(endpoint).then(response => response.json());
};

export default fetchPokemons;
