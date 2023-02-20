import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PokeCard from "../components/Pokedex/PokeCard";
import { useSelector } from "react-redux";
import types from "../json/types.json";
import { useNavigate } from "react-router-dom";

const Pokedex = () => {
  const [pokemons, setpokemons] = useState();
  const [displayPoke, setdisplayPoke] = useState(20);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${displayPoke}&offset=0'`;
  const { nameTrainer } = useSelector((state) => state);
  const [filterValue, setfilterValue] = useState("");
  const navigate = useNavigate();
  const getAllPokemons = () => {
    axios
      .get(url)
      .then((res) => setpokemons(res.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/pokemon/${e.target[0].value.toLowerCase()}`);
  };
  const handlselect = (e) => {
    setfilterValue(e.target.value);
  };
  const handledispay = (e) => {
    e.preventDefault();
    if (e.target[0].value > 0 && e.target[0].value <= 1279)
      setdisplayPoke(e.target[0].value);
  };
  console.log(pokemons);
  useEffect(getAllPokemons, [displayPoke]);
  return (
    <>
      <Header />
      <div className="pokedex__message">
        <h1 className="nametrainer">Welcome {nameTrainer}</h1>
        <p className="nametrainer__text">
          Here you can find all the Pokémon that you can catch.
          <img className="pokeballgif" src="../../img/pokeball.gif" alt="" />
        </p>
      </div>
      <div>
        <h4>Showing {displayPoke} Pokémons</h4>
        <form onSubmit={handledispay} action="">
          <label htmlFor="">
            Here you can set the total quantity to display. Set from 1 to 1279.
          </label>
          <input type="number" placeholder="20" />
          <button>Display</button>
        </form>
      </div>

      <div className="pokedex__filters">
        <form onSubmit={handleSubmit} className="podekex__form">
          <input
            placeholder="Enter a Pokémon name"
            className="podekex__form--input"
            id="podekex__form--input"
            type="text"
          />
          <button className="podekex__form--btn">Search</button>
        </form>
        <form className="pokedex__form--select">
          <label htmlFor="typeselect">Or select you Pokémon type</label>
          <select onChange={handlselect} defaultValue="">
            <option value="">All types</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type[0].toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="pokedex__grid">
        {pokemons?.results.map((pokemon) => (
          <PokeCard
            filterValue={filterValue}
            key={pokemon.name}
            pokemon={pokemon}
          />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
