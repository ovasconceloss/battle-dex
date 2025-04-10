import Fastify from 'fastify';
import { configDotenv } from 'dotenv';

configDotenv();

const fastify = Fastify({ logger: true });
fastify.register(import('@fastify/cors'), { origin: '*' });

export default fastify;