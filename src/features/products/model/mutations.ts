import { ORIGIN } from "@/core/constants"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Product } from "../../../../prisma/generated"
import { CreateProductDTO } from "@/repositories/products"
import { json } from "stream/consumers"


export const useProductsCreate = () => {


    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['products'],
        mutationFn: (data: CreateProductDTO): Promise<Product> => fetch(`${ORIGIN}api/products`, {
            method: 'POST',
            body: JSON.stringify(data)


        }).then(res => res.json()),


        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
        }
    })
}



export const useProductsDelete = () => {


    const queryClient = useQueryClient()

    return useMutation({
        mutationKey: ['products'],
        mutationFn: (id: string): Promise<Product> => fetch(`${ORIGIN}api/products/${id}`, {
            method: 'DELETE',


        }).then(res => res.json()),


        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
        }
    })
}