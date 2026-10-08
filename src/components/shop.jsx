import { useState } from "react";
import useGetPokemonsBtIds from "../hook/useGetPokemonById";

function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Shop() {
    const ids = Array.from({length: 151}, (_, i) => i + 1);
    const {data: pokemons, isLoading} = useGetPokemonsBtIds(ids);
    const filters = ["grass", "fire", "water", "bug", "normal", "poison", "electric", "fairy", "ground", "fighting", "psychic", "rock", "ghost", "dragon"];
    const [filter, setFilter] = useState("");

    return (
        <div className="flex">
            <div className="absolute top-36 left-12 flex flex-col gap-2">
                {filters.map(flt => {
                    const bgClass = flt === filter ? "bg-black" : "bg-[#B30000]";
                    const textClass = flt === filter ? "text-[#B30000]" : "text-black";
                    const className = `font-bold p-4 ${bgClass} ${textClass} rounded-[10px] hover:scale-110 active:scale-95 transition-all ease-out`;

                    return (
                        <button
                            className={className}
                            onClick={() => {
                                if (flt === filter)
                                    setFilter("");
                                else
                                    setFilter(flt);
                            }}
                        >
                            {upperFirstLetter(flt)}
                        </button>
                )})}
            </div>
            {isLoading
             ? <p>Loading ...</p>
             : (
                 <div className="m-auto mt-16 mb-16 flex flex-wrap gap-8 justify-center w-[1250px]">
                     {pokemons.map(pokemon => (
                         <div className="border-2 border-black rounded-[10px] p-4 flex flex-col items-center gap-2 w-[150px] hover:scale-110 active:scale-95 transition-all ease-out cursor-pointer bg-[#FFCCCC] text-black">
                             <h1 className="text-xl font-bold">{upperFirstLetter(pokemon.name)}</h1>
                             <img
                                 src={pokemon.sprites.front_default}
                                 alt={pokemon.name}
                             />
                             <p>Type : <span className="font-bold">{upperFirstLetter(pokemon.types[0].type.name)}</span></p>
                             <p>{(pokemon.base_experience / 2 * 100000).toLocaleString('fr-FR')} ₽</p>
                         </div>
                     ))}
                 </div>
             )}
        </div>
    );
}
