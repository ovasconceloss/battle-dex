import bcrypt from 'bcrypt';
import fastify from '../fastify';
import prismaClient from "../../prisma/prismaClient";
import { AuthError, ConflictError, NotFoundError } from '../utils/errors';

class AuthService {
    static async signUp(email: string, username: string, password: string) {
        const userExist = await prismaClient.user.findUnique({ where: { email } });
        if (userExist) throw new ConflictError("This email has already been registered.");

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await prismaClient.user.create({
            data: {
                email,
                username: username || '',
                passwordHash: passwordHash,
                role: "user",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        });

        const { passwordHash: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }

    static async signIn(email: string, password: string) {
        if (!email || !password) throw new Error("Email and password are required");

        const user = await prismaClient.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                passwordHash: true,
            }
        });

        if (!user) throw new NotFoundError('User not found');

        const passwordMatch = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatch) throw new AuthError('Invalid password');

        const authToken = fastify.jwt.sign({ id: user.id, email: user.email }, { expiresIn: '1h' });
        const userWithToken = { ...user, token: authToken };

        const { passwordHash: _, ...userWithoutPassword } = userWithToken;
        return userWithoutPassword;
    }

    static async signOut(token: string) {
        const decodedToken: any = fastify.jwt.decode(token);
        const expiresAt = new Date(decodedToken.exp * 1000);

        await prismaClient.revokedToken.create({ data: { token, expiresAt } });

        return { success: true, message: "Logged out successfully" };
    }

    static async deleteAccount(userId: string, password: string, token: string) {
        const user = await prismaClient.user.findUnique({ where: { id: userId } });

        if (!user) throw new NotFoundError('User not found');

        const passwordMatch = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatch) throw new AuthError('Invalid password');

        const decodedToken: any = fastify.jwt.decode(token);
        const expiresAt = new Date(decodedToken.exp * 1000);

        await prismaClient.revokedToken.create({ data: { token, expiresAt } });
        await prismaClient.user.delete({ where: { id: userId } });

        return { success: true, message: "Account deleted successfully" };
    }
}

export default AuthService;