import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const { nameTrainer } = useSelector((state) => state);
  return (
    <header className="pokedex__header">
      <div className="pokedex__header--imgbox">
        <img
          className="pokedex__header--img"
          src="../img/pokedexname.png"
          alt="pokedexname"
        />
      </div>
      <span className="pokeball">
        <span className="pokeball_circle1">
          <span className="pokeball_circle2">
            <span className="pokeball_circle3"></span>
          </span>
        </span>
      </span>
      <h1 className="nametrainer">
        <span>Welcome {nameTrainer}!</span>
        <img className="pokeballgif" src="../../img/pokeball.gif" alt="" />
      </h1>
    </header>
  );
};

export default Header;
