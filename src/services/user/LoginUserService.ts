import { sign } from "jsonwebtoken";
import prisma from "../../prisma/prismaClient";
import bcrypt from "bcryptjs";

interface RequestProps {
	email: string;
	password: string;
}

class LoginUserService {
	async handle({ email, password }: RequestProps) {
		if (!email || !password) {
			throw new Error("EMAIL/PASSWORD INCORRECT");
		}
		const user = await prisma.user.findFirst({
			where: {
				email: email,
			},
			select: {
				id: true,
				name: true,
				email: true,
				password: true,
			},
		});
		if (!user) {
			throw new Error("USER NOT EXISTS");
		}
		const passwordMath = await bcrypt.compare(password, user.password);
		if (!passwordMath) {
			throw new Error("EMAIL/PASSWORD INCORRECT");
		}
		const token = sign(
			{
				name: user.name,
				email: user.email,
			},
			process.env.JWT_SECRET_KEY,
			{
				subject: user.id,
				expiresIn: "30d",
			}
		);
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			token: token,
		};
	}
}

export { LoginUserService };
