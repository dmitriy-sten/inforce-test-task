import { productsRepository } from "@/repositories/products"
import { NextRequest } from "next/server"

export async function DELETE(req: NextRequest,

    { params }: { params: Promise<{ id: string }> }
) {

    const id = (await params).id

    const deleted_product = await productsRepository.delete(id)

    if (deleted_product) {

        return Response.json({ message: 'success' })
    }

    return Response.json({ message: 'Something went wrong' })
} 