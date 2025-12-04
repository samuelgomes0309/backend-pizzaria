import prisma from "../../prisma/prismaClient";

interface RequestProps {
	order_id: string;
	amount: string | number;
	product_id: string;
}

class RemoveItemService {
	async execute({ order_id, amount, product_id }: RequestProps) {
		if (!order_id) {
			throw new Error("Order incorrect");
		}
		const item = await prisma.item.findFirst({
			where: {
				orderId: order_id,
				productId: product_id,
			},
			include: {
				order: true,
			},
		});
		if (!item) {
			throw new Error("Item not found");
		}
		if (item.order.draft === false) {
			throw new Error("Order already shipped");
		}
		const itemQtd = Number(amount);
		if (isNaN(itemQtd) || itemQtd <= 0) {
			throw new Error("Amount incorrect");
		}
		if (itemQtd < item.amount) {
			const updatedItem = await prisma.item.update({
				where: {
					id: item.id,
				},
				data: {
					amount: item.amount - itemQtd,
				},
			});
			return updatedItem;
		}
		const deletedItem = await prisma.item.delete({
			where: {
				id: item.id,
			},
		});
		return deletedItem;
	}
}

export { RemoveItemService };
