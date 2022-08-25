import React from 'react';
import classes from './PokemonLabel.module.css';

const { label } = classes;

const PokemonLabel = ({ sprite }) => {
    return (
        <div className={label}>
            <img src={sprite} alt="uwu" />
            <h3>Bulbasaur</h3>
        </div>
    );
};

export default PokemonLabel;