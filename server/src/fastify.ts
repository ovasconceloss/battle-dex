import Fastify from 'fastify';

const fastify = Fastify({ logger: true });
fastify.register(import('@fastify/cors'), { origin: '*' });

export default fastify;