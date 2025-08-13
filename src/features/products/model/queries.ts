import { ORIGIN } from "@/core/constants"
import { useQuery } from "@tanstack/react-query"
import { Product } from "../../../../prisma/generated"

export const useProductsList = () => {

    return useQuery({
        queryKey: ['products'],
        queryFn: (): Promise<Product[]> => fetch(`${ORIGIN}api/products`, {
            method: 'GET',

        }).then(res => res.json())
    })
}
