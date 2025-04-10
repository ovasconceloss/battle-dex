import Fastify from 'fastify';
import { configDotenv } from 'dotenv';
import { authRoutes } from './routes/auth.routes';

configDotenv();

if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not defined in the environment variables');

const fastify = Fastify({ logger: true });

fastify.register(import('@fastify/cors'), { origin: '*' });
fastify.register(import('@fastify/jwt'), { secret: process.env.JWT_SECRET });

fastify.register(authRoutes);

export default fastify;