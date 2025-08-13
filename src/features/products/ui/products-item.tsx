import React from "react";
import { Product } from "../../../../prisma/generated";
import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Trash2Icon } from "lucide-react";

interface Props {
  className?: string;
  product: Product;
  onDelete: () => void;
}

export const ProductsItem: React.FC<Props> = ({
  className,
  product,
  onDelete,
}) => {
  return (
    <Card
      className={cn(
        "flex  p-1 gap-2 relative group max-w-[250px] overflow-hidden",
        className
      )}
    >
      <img
        className="max-h-[250px] object-contain rounded-xl "
        src={product.imageUrl}
        alt={product.name}
      />
      <div className="px-2">
        <h2 className="text-x font-bold truncate">{product.name}</h2>
        <p>{product.count}</p>
        <p>{product.weight}</p>
      </div>

      <Button
        className="hidden md:block z-10 bg-red-300 absolute top-1 right-1 opacity-0 group-hover:opacity-100 hover:bg-red-400"
        onClick={onDelete}
      >
        <Trash2Icon />
      </Button>
    </Card>
  );
};
