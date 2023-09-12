import {API_URL} from '../utils/Constant';

export const findAllPokemon = (limit: number = 151) => {
    return fetch(API_URL + '/pokemon?limit=' + limit);
};


export const findPokemonById = (id: number, url?: string) => {
    return fetch(url ? url : API_URL + '/pokemon/' + id);
};
