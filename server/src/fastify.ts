import Fastify from "fastify";
import { configDotenv } from "dotenv";

configDotenv();

const fastify = Fastify({ logger: true });

export default fastify;