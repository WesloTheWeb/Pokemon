import React from 'react';
import classes from './Entry.module.css';
import PokemonLabel from '../PokemonLabel/PokemonLabel';

const { entryContainer, entryHeader, stats } = classes;

const Entry = ({
    sprite,
    name,
    id,
    hp,
    attack,
    defense,
    speed,
    type,
    weight,
    expand
}) => {
    return (
        <section className={entryContainer}>
            <div className={entryHeader}>
                <PokemonLabel sprite={sprite} />
                <label className="pokeID">001</label>
            </div>
            {expand ? (
                <div className={stats}>
                    <label>HP: {hp}</label>
                    <label>Attack: {attack}</label>
                    <label>Defense: {defense}</label>
                    <label>Speed: {speed}</label>
                    <label>Type: {type}</label>
                    <label>Weight: {weight}</label>
                </div>
            ) : null}
        </section>
    );
};

export default Entry