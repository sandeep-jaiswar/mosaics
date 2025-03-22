import { Product } from "@/types/product";

const ProductDisplay = ({ description, name }: Product) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md w-1/4 outline-dashed">
      <h2 className="mt-4 text-lg font-semibold text-gray-900">{name}</h2>
      <p className="mt-2 text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

export default ProductDisplay;