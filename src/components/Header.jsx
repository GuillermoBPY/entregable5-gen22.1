import React from "react";

const Header = () => {
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
    </header>
  );
};

export default Header;
