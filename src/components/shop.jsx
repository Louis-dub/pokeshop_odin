import useGetPokemonsBtIds from "../hook/useGetPokemonById";

function upperFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Shop() {
    const ids = Array.from({length: 151}, (_, i) => i + 1);
    const {data: pokemons, isLoading} = useGetPokemonsBtIds(ids);

    return (
        <>
            {isLoading
             ? <p>Loading ...</p>
             : pokemons.map(pokemon => (
                 <div>
                     <h1>{upperFirstLetter(pokemon.name)}</h1>
                     <img
                         src={pokemon.sprites.front_default}
                         alt={pokemon.name}
                     />
                     <p>Type : {upperFirstLetter(pokemon.types[0].type.name)}</p>
                 </div>
             ))}
        </>
    );
}
