import { FastifyInstance } from "fastify";
import verifyToken from "../middlewares/auth.verifyToken";
import PokemonController from "../controllers/pokemon.controller";

export async function pokemonRoutes(fastify: FastifyInstance) {
    fastify.register(async (fastify) => {
        fastify.addHook("preHandler", verifyToken);

        fastify.get("/pokemon", PokemonController.getAllPokemons);
        fastify.get("/pokemon/:pokemonName", PokemonController.getPokemonByName);
    });
}