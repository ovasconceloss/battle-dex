import AuthService from "../services/auth.service";
import { FastifyReply, FastifyRequest } from "fastify";

class AuthController {
    static async signUp(request: FastifyRequest, reply: FastifyReply) {
        const { email, username, password } = request.body as { email: string; username: string; password: string };

        try {
            const user = await AuthService.signUp(email, username, password);
            reply.code(201).send({ user });
        } catch (error) {
            reply.code(400).send({
                statusCode: 400,
                error: error instanceof Error ? error.message : 'Unknown error',
                message: 'User registration failed',
                status: 'fail',
                ocorredAt: new Date().toISOString()
             });
        }
    }
}

export default AuthController;