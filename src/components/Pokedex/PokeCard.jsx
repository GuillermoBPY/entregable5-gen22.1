import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/PokeCard.css";

const PokeCard = ({ pokemon }) => {
  const [pokeInfo, setpokeInfo] = useState();
  const getPokeInfo = () => {
    const url = pokemon.url;
    axios
      .get(url)
      .then((res) => setpokeInfo(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(getPokeInfo, []);
  return (
    <>
      {pokeInfo && (
        <article className={`color-${pokeInfo?.types[0].type.name} pokecard`}>
          <header className={`bg-${pokeInfo?.types[0].type.name} pokecard__header`}>
            <img
              className="pokecard__header--img"
              src={pokeInfo.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>
          <div className="pokecard__info">
            <div className="pokecard__info--data">
              <h2 style={{ textTransform: "capitalize" }}>{pokeInfo.name}</h2>
              <ul>
                {pokeInfo.types.map((type) => (
                  <li key={type.type.name}>{type.type.name}</li>
                ))}
              </ul>
              <p>Type</p>
            </div>
            <ul className="pokecard__info--stats">
              {pokeInfo.stats.map((stat) => (
                <li key={stat.stat.url}>
                  <span>{stat.stat.name}</span>
                  <span>{stat.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}
    </>
  );
};

export default PokeCard;
