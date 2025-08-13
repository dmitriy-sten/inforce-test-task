import { prisma } from "@/core/database"
import { PrismaClient } from "../../prisma/generated"



class CommentsRepository {


    constructor(private readonly prisma: PrismaClient) { }

    async getAll() {


        return await this.prisma.product.findMany()
    }






}



export const commentsRepository = new CommentsRepository(prisma)