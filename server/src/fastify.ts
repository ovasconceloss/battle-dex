import Fastify from "fastify";
import { configDotenv } from "dotenv";

configDotenv();

const fastify = Fastify({ logger: true });

if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not defined in the environment variables');

fastify.register(import('@fastify/jwt'), { secret: process.env.JWT_SECRET });
fastify.register(import("@fastify/cors"), { origin: process.env.CLIENT_URL, credentials: true });
fastify.register(import('@fastify/cookie'), { secret: process.env.COOKIE_SECRET, hook: 'onRequest', parseOptions: {} })

export default fastify;