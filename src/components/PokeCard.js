import React from "react";

const PokeCard = props => {
  const { name, image, type, id } = props;
  return (
    <div className="card">
      <div className="card__img">
        <img src={image} alt="" />
      </div>

      <p className="pokemon_id">{`ID/ ${id}`}</p>
      <div className="card__container">
        <h2 className="card__name">{name}</h2>
        <p className="pokemon_types">{type}</p>
      </div>
    </div>
  );
};

export default PokeCard;
