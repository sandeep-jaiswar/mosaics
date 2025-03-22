import { Product } from "@/types/product";
import ProductDisplay from "./ProductDisplay";

const ProductDisplaySection = ({ products }: { products: Product[] }) => {
  return (
    <div className="flex w-4/5 flex-wrap">
      {products.map((product: Product) => (
        <ProductDisplay key={product.name} {...product} />
      ))}
    </div>
  );
};

export default ProductDisplaySection;
