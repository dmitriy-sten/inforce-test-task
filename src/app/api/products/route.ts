import { CreateProductDTO, productsRepository } from "@/repositories/products";
import { NextRequest } from "next/server";


export async function GET() {

    const products = await productsRepository.list()

    return Response.json(products)
}


export async function POST(req: NextRequest) {

    const body = await req.json() as CreateProductDTO
    const new_product = await productsRepository.create(body)

    if (new_product) {

        return Response.json(new_product)
    }

    return Response.json({ message: 'Something went wrong' })
} 