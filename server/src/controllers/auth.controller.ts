import { AppError } from "../utils/errors";
import AuthService from "../services/auth.service";
import { FastifyReply, FastifyRequest } from "fastify";

class AuthController {
    static async signUp(request: FastifyRequest, reply: FastifyReply) {
        const { email, username, password } = request.body as { email: string; username: string; password: string }

        try {
            const user = await AuthService.signUp(email, username, password);
            reply.code(201).send({ user });
        } catch (error) {
            if (error instanceof AppError) {
                reply.code(error.statusCode).send({
                    statusCode: error.statusCode,
                    error: error.message,
                    message: 'User registration failed',
                    status: 'fail',
                    ocorredAt: new Date().toISOString()
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

export default AuthController;