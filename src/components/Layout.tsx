import {NavBar} from './NavBar';
import {Home} from './Home';
import React, {useEffect, useRef, useState} from 'react';
import {Pokemon} from '../models/Pokemon';
import {findAll} from '../services/PokeApiService';

export const Layout = () => {

    const [pokemons, setPokemons] = useState([] as Pokemon[]);
    const [filterPokemons, setFilterPokemons] = useState([] as Pokemon[]);
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
                setFilterPokemons(data);
            })
            .catch(error => console.log(error))
            .finally(() => console.log('done'));

    }, []);

    const filerPokemons = (value: string) => {
        console.log(value);
        const filtered = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(value.toLowerCase()));
        setFilterPokemons(filtered);
    };

    return (
        <div className="flex flex-col h-screen w-screen">
            <div className="w-full">
                <NavBar filter={(value: string) => {
                    filerPokemons(value);
                }}/>
            </div>
            <div className="w-full overflow-y-auto">
                <Home pokemons={filterPokemons}/>
            </div>

        </div>
    );



};