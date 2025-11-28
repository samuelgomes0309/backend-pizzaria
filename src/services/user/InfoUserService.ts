import prisma from "../../prisma/prismaClient";

interface RequestProps {
	user_id: string;
}

class InfoUserService {
	async execute({ user_id }: RequestProps) {
		const user = await prisma.user.findFirst({
			where: {
				id: user_id,
			},
			select: {
				id: true,
				name: true,
				email: true,
			},
		});
		return user;
	}
}

export { InfoUserService };
