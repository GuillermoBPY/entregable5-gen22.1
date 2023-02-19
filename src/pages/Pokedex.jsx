import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PokeCard from "../components/Pokedex/PokeCard";

const Pokedex = () => {
  const [pokemons, setpokemons] = useState();
  const url = "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0'";

  const getAllPokemons = () => {
    axios
      .get(url)
      .then((res) => setpokemons(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(getAllPokemons, []);
  return (
    <>
      <Header />
      <div className="pokedex__grid">
        {pokemons?.results.map((pokemon) => (
          <PokeCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
