import { AppError } from "../utils/errors";
import { FastifyReply, FastifyRequest } from "fastify";
import PokemonService from "../services/pokemon.service";

class PokemonController {
    static async getAllPokemons(request: FastifyRequest, reply: FastifyReply) {
        try {
            const response = await PokemonService.fetchAllPokemon();
            reply.code(201).send({ response });
        } catch (error) {
            if (error instanceof AppError) {
                reply.code(error.statusCode).send({
                    statusCode: error.statusCode,
                    error: error.message,
                    message: 'Failed to search for all pokemons',
                    status: 'fail',
                    occurredAt: new Date().toISOString()
                });
            } else {
                reply.code(500).send({
                    statusCode: 500,
                    error: 'Internal Server Error',
                    message: 'An unexpected error occurred',
                    status: 'fail',
                    occurredAt: new Date().toISOString()
                });
            }
        }
    }

    static async getPokemonByName(request: FastifyRequest, reply: FastifyReply) {
        const { pokemonName } = request.params as { pokemonName: string }

        try {
            const response = await PokemonService.fetchPokemonByName(pokemonName);
            reply.code(201).send({ response });
        } catch (error) {
            if (error instanceof AppError) {
                reply.code(error.statusCode).send({
                    statusCode: error.statusCode,
                    error: error.message,
                    message: 'Failed to retrieve pokemon data: ' + pokemonName,
                    status: 'fail',
                    occurredAt: new Date().toISOString()
                });
            } else {
                reply.code(500).send({
                    statusCode: 500,
                    error: 'Internal Server Error',
                    message: 'An unexpected error occurred',
                    status: 'fail',
                    occurredAt: new Date().toISOString()
                });
            }
        }
    }
}

export default PokemonController;