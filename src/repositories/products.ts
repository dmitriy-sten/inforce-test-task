import { prisma } from "@/core/database";
import { Prisma, PrismaClient } from "../../prisma/generated";

export type Size = { width: number; height: number };

export type CreateProductDTO = {
    imageUrl: string;
    name: string;
    count: Prisma.Decimal | number | string;
    size: Size;
    weight: string;
};
export type UpdateProductDTO = Partial<CreateProductDTO>;


export class ProductRepository {
    constructor(private readonly db: PrismaClient) { }

    create(dto: CreateProductDTO) {
        return this.db.product.create({
            data: {
                imageUrl: dto.imageUrl,
                name: dto.name,
                count: dto.count,
                size: JSON.stringify(dto.size),
                weight: dto.weight,
            },
        });
    }

    findById(id: string, withComments = false) {
        return this.db.product.findUnique({
            where: { id },
            include: withComments ? { coments: true } : undefined,
        });
    }

    list() {
        return this.db.product.findMany({
            where: { name: { mode: "insensitive" } },

        });
    }

    async update(id: string, dto: UpdateProductDTO) {
        return this.db.product.update({
            where: { id },
            data: {
                imageUrl: dto.imageUrl,
                name: dto.name,
                count: dto.count !== undefined ? dto.count : undefined,
                size: dto.size !== undefined ? JSON.stringify(dto.size) : undefined,
                weight: dto.weight,
            },
        });
    }

    delete(id: string) {
        return this.db.product.delete({ where: { id } });
    }
}


export const productsRepository = new ProductRepository(prisma)
