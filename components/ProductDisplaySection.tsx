import { Product } from "@/types/product";
import ProductDisplay from "./ProductDisplay";

const ProductDisplaySection = ({ products }: { products: Product[] }) => {
  return (
    <div className="h-max col-span-4">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <ProductDisplay key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductDisplaySection;
