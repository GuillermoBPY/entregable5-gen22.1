import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Pokemon.css";

const Pokemon = () => {
  const [pokemon, setpokemon] = useState();
  const [showPokemon, setshowPokemon] = useState(true);
  const pokename = useParams();

  const callPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokename.name}`;
    axios
      .get(url)
      .then((res) => {
        setshowPokemon(true);
        setpokemon(res.data);
      })
      .catch((err) => {
        setshowPokemon(false);
        console.log(err);
      });
  };
  console.log(pokemon)
  useEffect(callPokemon, [pokename.name]);
  if (!showPokemon) {
    return (
      <div>
        <Header />
        <div className="notfounbox"></div>
        <h2 className="notfounbox__h2">
          Sorry, no Pokémon with the name <span>{`${pokename.name}`}</span> have
          been caught yet. Let's try another.
        </h2>
        <img
          className="notfounbox__img"
          src="../../img/pikatriste.gif"
          alt=""
        />
      </div>
    );
  } else {
    return (
      <div className="pokemon">
        <Header />
        <div className="pokemon__info">
          <div
            className={`pokemon__info--img bg-${pokemon?.types[0].type.name}`}
          >
            <img
              src={pokemon?.sprites.other["home"].front_default}
              alt=""
            />
          </div>
          <div className="pokemon__stats">
            <h3>#{pokemon?.id}</h3>
            <h1>{pokemon?.name}</h1>
            <div>
              <h2 className="stats__title">Stats</h2>
              <ul className="stat__grid">
                {pokemon?.stats.map((stat) => (
                  <li className="stat" key={stat.stat.name}>
                    <div className="stat__box">
                      <span>{stat.stat.name}</span>
                      <span>{stat.base_stat}/150</span>
                    </div>
                    <div className="stat__level--box">
                      <span
                        //
                        style={{ width: `${stat.base_stat / 1.5}%` }}
                        className="stat__level"
                      ></span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h2 className="move_title">Moves</h2>
          <div className="pokemon__moves">
            {pokemon?.moves.map((move) => (
              <span key={move.move.name}>
                {move.move.name.replaceAll("-", "")}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Pokemon;
