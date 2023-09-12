import {Pokemon} from '../models/Pokemon';

export type PokemonCardProps = {
    pokemon: Pokemon;
}
export const PokemonCard = ({pokemon}: PokemonCardProps) => {
    return (

        <div
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className=" w-full p-2" src={pokemon.image} alt="product image"/>
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white capitalize">{pokemon.name}</h5>
                </a>
            </div>
        </div>

    );
};


