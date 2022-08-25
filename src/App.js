import { React, useState, useEffect } from 'react';
import Entry from './components/Entry/Entry';
import './App.css';
import NavButton from './components/NavButton/NavButton';

// const Pokedex = require("pokeapi-js-wrapper");

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    console.log("clicked!");
    setExpand(!expand);
  };

  // useEffect(() => {
  //   const P = new Pokedex.Pokedex();
  //   (async () => {
  //     const list = await P.getPokemonsList();
  //     const newArr = [];
  //     for (const obj of list.results) {
  //       newArr.push(obj.name);
  //     }
  //     setPokemon([...newArr]);
  //   })();

  //   (async () => {
  //     const newArr2 = [];
  //     for (const name of pokemon) {
  //       const details = await P.getPokemonByName(name);
  //       newArr2.push(details);
  //     }
  //     console.log(newArr2);
  //   })();
  // }, []);

  return (
    <>
      <div className="App">
        <h1>Pokemon Index</h1>
        <h2>Below is a list of pokemon, click to expand and view more stats.</h2>
      </div>

      <Entry onClick={handleExpand} expand={true} />
      <div className="navigationControls">
        <NavButton name="prev" />
        <NavButton name="next" />
      </div>
    </>)
};

export default App;