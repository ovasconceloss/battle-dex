import prisma from "../../prisma/prismaClient";
import { FastifyReply, FastifyRequest } from "fastify";

const verifyToken = async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const authHeader = request.headers['authorization'];
        if (!authHeader) throw new Error('Missing authorization header');

        const token = authHeader.split(' ')[1];
        const revokedToken = await prisma.revokedToken.findUnique({ where: { token } });

        if (revokedToken) {
            return reply.code(401).send({
                statusCode: 401,
                error: "Token has been revoked",
                message: 'Unauthorized',
                status: 'fail',
                ocorredAt: new Date().toISOString()
            });
        }

        const payload = await request.jwtVerify();
        (request as any).user = payload;
    } catch (error) {
        reply.code(401).send({
            statusCode: 401,
            error: error instanceof Error ? error.message : 'Unknown error',
            message: 'Unauthorized',
            status: 'fail',
            ocorredAt: new Date().toISOString()
        });
    }
}

export default verifyToken;