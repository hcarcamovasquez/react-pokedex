import {findAllPokemon, findPokemonById} from '../repository/PokeApiRepository';
import {Pokemon} from '../models/Pokemon';

export const findAll = async (limit?: number): Promise<Pokemon[]> => {
    const response = await findAllPokemon(limit);
    const data = await response.json();
    const promises = data.results.map((p: Record<string, any>) => new Promise(async (resolve) => {
        const pokemon = await findPokemonById(p.id, p.url);
        const pokemonData = await pokemon.json();
        resolve(toPokemon(pokemonData));
    }));
    return Promise.all(promises);
};


export const getById = async (id: number): Promise<Pokemon> => {
    const response = await findPokemonById(id);
    const data = await response.json();
    return toPokemon(data);
};


const toPokemon = (data: Record<string, any>): Pokemon => {
    return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
    } as Pokemon;
};