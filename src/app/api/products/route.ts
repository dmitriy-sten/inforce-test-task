import { productsRepository } from "@/repositories/products";


export async function GET() {

    const products = await productsRepository.list()

    return Response.json(products)
} 