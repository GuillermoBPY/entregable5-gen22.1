import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slices/trainerName.slice";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(setNameTrainer(e.target.name.value.replace(/ /g, "")));
    e.target.reset();
    navigate("/pokedex");
  };

  return (
    <div className="home">
      <div className="home_interactive">
        <figure className="home__figure">
          <img src="../img/pokedexname.png" alt="" />
        </figure>
        <h2 className="home__h2">Hello trainer!</h2>
        <p>Please, enter your name to begin.</p>
        <form className="home__form" onSubmit={handlesubmit}>
          <input placeholder="Trainer name..." className="home_input" id="name" type="text" />
          <button className="home__button--submit">Start</button>
        </form>
      </div>
      <img className="home__pokeballgif" src="../../img/pokeball.gif" alt="" />
      <div className="home__label"></div>
      <span className="home__pokeball">
        <span className="home__pokeball_circle1">
          <span className="home__pokeball_circle2">
            <span className="home__pokeball_circle3"></span>
          </span>
        </span>
      </span>
    </div>
  );
};

export default Home;
