export async function getPokemonById(id) {
    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!pokemon.ok)
            throw new Error("Error HTTP: ", pokemon.status);
        return pokemon.json();
    } catch (error) {
        console.error("Error: ", error);
        return "";
    }
}
