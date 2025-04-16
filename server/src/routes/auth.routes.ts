import { FastifyInstance } from "fastify";
import verifyToken from "../middlewares/auth.verifyToken";
import AuthController from "../controllers/auth.controller";

export async function authRoutes(fastify: FastifyInstance) {
    fastify.post("/auth/signup", AuthController.signUp);
    fastify.post("/auth/signin", AuthController.signIn);

    fastify.register(async (fastify) => {
        fastify.addHook("preHandler", verifyToken);

        fastify.post("/auth/signout", AuthController.signOut);
        fastify.post("/auth/delete", AuthController.deleteAccount);
    });
}