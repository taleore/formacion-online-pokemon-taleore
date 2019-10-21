import React from "react";
import PokeCard from "./PokeCard";

const Pokelist = props => {
  const { pokemons, query } = props;
  return (
    <ol className="poke_list">
      {pokemons
        .filter(myPokemon =>
          myPokemon.name.toUpperCase().includes(query.toUpperCase())
        )
        .map((pokemon, index) => {
          return (
            <li className="poke_card" key={index}>
              <PokeCard
                name={pokemon.name}
                image={pokemon.image}
                type={pokemon.type}
                id={pokemon.id}
              />
            </li>
          );
        })}
    </ol>
  );
};

export default Pokelist;
