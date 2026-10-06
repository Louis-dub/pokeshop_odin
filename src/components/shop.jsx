import useGetPokemonsBtIds from "../hook/useGetPokemonById";

export default function Shop() {
    const ids = Array.from({length: 151}, (_, i) => i + 1);
    const {data: pokemons, isLoading, isError} = useGetPokemonsBtIds(ids);

    console.log("pokemon : ", pokemons);
    return (
        <>
            {isLoading
             ? <p>Loading ...</p>
             : pokemons.map(pokemon => (
                 <div>
                     <h1>{pokemon.name}</h1>
                     <img
                         src={pokemon.sprites.front_default}
                         alt={pokemon.name}
                     />
                     <p>Type : {pokemon.types[0].type.name}</p>
                 </div>
             ))}
        </>
    );
}
