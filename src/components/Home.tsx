import {PokemonCard} from './PokemonCard';
import React from 'react';
import {Pokemon} from '../models/Pokemon';

export type HomeProps = {
    pokemons: Pokemon[];
}

export const Home = ({pokemons}: HomeProps) => {

    return (
        <div className="bg-gray-100 dark:bg-gray-900">
            <div className="p-6 sm:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {pokemons.map((pokemon, i) => <PokemonCard pokemon={pokemon} key={i}/>)}
                </div>
            </div>
        </div>
    );

};