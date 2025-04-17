import Fastify from "fastify";
import { configDotenv } from "dotenv";
import { authRoutes } from "./routes/auth.routes";
import { pokemonRoutes } from "./routes/pokemon.routes";

configDotenv();

const fastify = Fastify({ logger: true });

if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not defined in the environment variables');
if (!process.env.UPSTREAM_URL) throw new Error('UPSTREAM_URL is not defined in the environment variables');

fastify.register(import('@fastify/jwt'), { secret: process.env.JWT_SECRET });
fastify.register(import("@fastify/cors"), { origin: process.env.CLIENT_URL, credentials: true });
fastify.register(import("@fastify/http-proxy"), { upstream: process.env.UPSTREAM_URL, prefix: '/pokeapi' });
fastify.register(import('@fastify/cookie'), { secret: process.env.COOKIE_SECRET, hook: 'onRequest', parseOptions: {} });

fastify.register(authRoutes);
fastify.register(pokemonRoutes);

export default fastify;