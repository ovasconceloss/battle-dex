import fastify from "../fastify";

class PokemonService {
    static async fetchAllPokemon() {
        const response = await fastify.inject({
            method: "GET",
            url: '/pokeapi/pokemon?limit=100&offset=0',
        });

        if (response.statusCode !== 200) throw new Error("Failed to fetch Pokemon data");

        return JSON.parse(response.body);
    }

    static async fetchPokemonByName(pokemonName: string) {
        const response = await fastify.inject({
            method: "GET",
            url: '/pokeapi/pokemon/' + pokemonName,
        });

        if (response.statusCode !== 200) throw new Error("Failed to fetch Pokemon data");

        return JSON.parse(response.body);
    }
}

export default PokemonService;