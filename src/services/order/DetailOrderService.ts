import prisma from "../../prisma/prismaClient";

interface RequestProps {
	order_id: string;
}

class DetailOrderService {
	async execute({ order_id }: RequestProps) {
		if (!order_id) {
			throw new Error("Order not found");
		}
		const order = await prisma.order.findUnique({
			where: {
				id: order_id,
			},
			include: {
				items: true,
			},
		});
		return order;
	}
}

export { DetailOrderService };
