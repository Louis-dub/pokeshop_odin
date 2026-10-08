import { useMemo, useState } from "react";
import useGetPokemonsBtIds from "../hook/useGetPokemonById";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { Link } from "react-router-dom";

function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Shop() {
    const ids = Array.from({length: 151}, (_, i) => i + 1);
    const {data: pokemons, isLoading} = useGetPokemonsBtIds(ids);
    const filters = ["grass", "fire", "water", "bug", "normal", "poison", "electric", "fairy", "ground", "fighting", "psychic", "rock", "ghost", "dragon"];
    const [pokeFilter, setFilter] = useState("");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const pokemonsFilter = useMemo(() => {
        if (isLoading)
            return [];
        else
            if (pokeFilter === "")
                return [...pokemons];
            else
                return pokemons.filter(poke => poke.types[0].type.name === pokeFilter);
    }, [pokemons, pokeFilter]);

    function handleCart(pokemon) {
        cart.push({
            id: pokemon.id,
            name: pokemon.name,
            img: pokemon.sprites.front_default,
            type: pokemon.types[0].type.name,
            price: pokemon.base_experience / 2 * 100000,
        });
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    return (
        <div className="flex flex-col items-center">
            <div className="absolute top-36 left-12 flex flex-col gap-2">
                {filters.map((flt, index) => {
                    const bgClass = flt === pokeFilter ? "bg-black" : "bg-[#B30000]";
                    const textClass = flt === pokeFilter ? "text-[#B30000]" : "text-black";
                    const className = `font-bold p-4 ${bgClass} ${textClass} rounded-[10px] hover:scale-110 active:scale-95 transition-all ease-out`;

                    return (
                        <button
                            key={index}
                            className={className}
                            onClick={() => {
                                if (flt === pokeFilter)
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
                 <div className="mt-16 mb-16 flex flex-wrap gap-8 justify-center w-[1250px]">
                     {pokemonsFilter.map(pokemon => (
                         <div
                             key={pokemon.id}
                             className="border-2 border-black rounded-[10px] p-4 flex flex-col items-center gap-2 w-[150px] hover:scale-110 active:scale-95 transition-all ease-out cursor-pointer bg-[#FFCCCC] text-black"
                             onClick={() => {handleCart(pokemon)}}
                         >
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
            <button className="mb-16 font-bold bg-[#B8B8B6] text-[#5E1200] p-2 rounded-[15px] hover:scale-110 active:scale-95 transition-all ease-out">
                <Link to="/cart" className="flex gap-2 items-center">
                    Pay Now
                    <FaMoneyBill1Wave />
                </Link>
            </button>
        </div>
    );
}
