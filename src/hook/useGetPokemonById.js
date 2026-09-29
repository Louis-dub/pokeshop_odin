import { useQuery } from "@tanstack/react-query";
import { getPokemonById } from "../api/getPokemonById";

export default function useGetPokemonBtId(id) {
    return useQuery({
        queryKey: ["pokemon", id],
        queryFn: () => getPokemonById(id),
    });
}
