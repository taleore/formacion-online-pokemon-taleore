import React from "react";
import fetchPokemons from "./services/fetchPokemons";
import "./App.css";
import Pokelist from "./components/Pokelist";
import Filters from "./components/Filters";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      query: ""
    };

    this.getUserQuery = this.getUserQuery.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons() {
    fetchPokemons().then(data => {
      console.log(data);
      for (let pokemonData of data.results) {
        fetch(pokemonData.url)
          .then(response => response.json())
          .then(pokemonItem => {
            const typesArray = [];
            console.log(pokemonItem);
            for (let pokemonType of pokemonItem.types) {
              typesArray.push(pokemonType.type.name);
            }
            const pokemonInfo = {
              name: pokemonData.name,
              image: pokemonItem.sprites.front_default,
              id: pokemonItem.id,
              type: typesArray
            };
            this.setState({
              pokemons: [...this.state.pokemons, pokemonInfo]
            });
          });
      }
    });
  }

  getUserQuery(event) {
    const query = event.currentTarget.value;

    this.setState({
      query: query
    });
  }

  render() {
    const { pokemons, query } = this.state;
    return (
      <div className="app">
        <Filters getUserQuery={this.getUserQuery} query={query} />
        <Pokelist pokemons={pokemons} query={query} />
      </div>
    );
  }
}

export default App;
