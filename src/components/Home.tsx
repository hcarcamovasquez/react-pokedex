import {PokemonCard} from './PokemonCard';
import React, {useEffect, useRef, useState} from 'react';
import {findAll} from '../services/PokeApiService';
import {Pokemon} from '../models/Pokemon';

export const Home = () => {

    const [pokemons, setPokemons] = useState([] as Pokemon[]);
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) {
            return;
        }
        initialized.current = true;
        findAll()
            .then(data => {
                console.log(data);
                setPokemons(data);
            })
            .catch(error => console.log(error))
            .finally(() => console.log('done'));

    }, []);


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