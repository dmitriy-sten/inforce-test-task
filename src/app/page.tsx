import { ProductsList } from "@/features/products/ui/products-list";
import { Product } from "../../prisma/generated";
import { ProductsItem } from "@/features/products/ui/products-item";

export default function Page() {
  return (
    <main>
      <ProductsList<Product>
        items={[]}
        renderItem={(item) => <ProductsItem key={item.id} product={item} />}
      />
    </main>
  );
}
