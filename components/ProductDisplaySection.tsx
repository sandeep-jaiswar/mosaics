import { Product } from "@/types/product";
import ProductDisplay from "./ProductDisplay";
import { WithId } from "mongodb";

const ProductDisplaySection = ({ products }: { products: WithId<Product>[] }) => {
  return (
    <div className="h-max col-span-4">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <ProductDisplay key={product._id.toString()} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductDisplaySection;
