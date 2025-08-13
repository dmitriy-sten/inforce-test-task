"use client";

import React from "react";
import { ProductsList } from "../ui/products-list";
import { ProductsItem } from "../ui/products-item";
import { Product } from "../../../../prisma/generated";
import { Spinner } from "@/shared/components/spinner";
import { Card } from "@/shared/components/ui/card";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { useProductsList } from "../model/queries";
import { Input } from "@/shared/components/ui/input";
import { CreateProductDialog } from "../ui/create-product-dialog";
import { useProductsDelete } from "../model/mutations";

interface Props {
  className?: string;
}

export const Products: React.FC<Props> = ({ className }) => {
  const { data, isLoading } = useProductsList();
  const { mutate: deleteProduct } = useProductsDelete();

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col items-center gap-5 mt-10">
      <CreateProductDialog />

      <ProductsList<Product>
        items={data}
        renderItem={(item) => (
          <ProductsItem
            key={item.id}
            product={item}
            onDelete={() => deleteProduct(item.id)}
          />
        )}
      />
    </div>
  );
};
