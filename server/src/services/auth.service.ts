import bcrypt from 'bcrypt';
import { ConflictError } from '../utils/errors';
import prismaClient from "../../prisma/prismaClient";

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
}

export default AuthService;