import React from "react";
import { Product } from "../../../../prisma/generated";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
  product: Product;
}

export const ProductsItem: React.FC<Props> = ({ className, product }) => {
  return (
    <div className={cn("", className)}>
      <img src={product.imageUrl} alt={product.name} />

      <h2>{product.name}</h2>
    </div>
  );
};
