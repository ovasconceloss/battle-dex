import bcrypt from 'bcrypt';
import { User } from '../types/user';
import prisma from '../../prisma/prismaClient';

class AuthService {
    static async signUp(email: string, username: string, password: string): Promise<User> {
        const userExisting = await prisma.user.findUnique({ where: { email } });
        if (userExisting) throw new Error("User already exists");

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({ data: {
            email,
            username: username || '',
            password: passwordHash,
            createdAt: new Date(),
            updatedAt: new Date()
        }});

        return { ...user, email: user.email || '', username: user.username || '', password: user.password || '' };
    }
}

export default AuthService;