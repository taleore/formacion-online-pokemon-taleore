import React from "react";

const PokeCard = props => {
  const { name, image, type, id } = props;
  return (
    <div className="card">
      <h2 className="card__name">{name}</h2>
      <div className="card__img">
        <img src={image} alt="" />
      </div>
      <p className="pokemon_types">{type}</p>
      <p className="pokemon_id">{`Id ${id}`}</p>
    </div>
  );
};

export default PokeCard;
