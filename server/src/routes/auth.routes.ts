import { FastifyInstance } from "fastify";
import AuthController from "../controllers/auth.controller";

export async function authRoutes(fastify: FastifyInstance) {
    fastify.post("/auth/signup", AuthController.signUp);
    fastify.post("/auth/signin", AuthController.signIn);
}