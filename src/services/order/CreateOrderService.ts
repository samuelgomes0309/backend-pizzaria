import prisma from "../../prisma/prismaClient";

interface RequestProps {
	table: string | number;
	name?: string;
}

class CreateOrderService {
	async execute({ table, name }: RequestProps) {
		if (!table) {
			throw new Error("Table incorrect");
		}
		const numberTable = Number(table);
		if (isNaN(numberTable) || numberTable <= 0) {
			throw new Error("Price is incorrect");
		}
		const order = await prisma.order.create({
			data: {
				table: numberTable,
				name: name,
			},
		});
		return order;
	}
}

export { CreateOrderService };
