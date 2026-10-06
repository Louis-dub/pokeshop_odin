import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../api/getPokemonById";

export default function useGetPokemonsBtIds(ids) {
    return useQuery({
        queryKey: ["pokemons", ids],
        queryFn: async () => {
            return await Promise.all(ids.map(id => getPokemonById(id)));
        },
    });
}
