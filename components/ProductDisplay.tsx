import { Product } from "@/types/product";
import Image from "next/image";

const ProductDisplay = ({ description, name, imgUrls }: Product) => {
  const imgSrc = imgUrls[0];
  const imgAlt = `${name} image`;
  return (
    <div className="flex flex-col items-center bg-white hover:shadow-lg w-full h-[400px] cursor-pointer col-span-1">
      <Image src={imgSrc} alt={imgAlt} width={200} height={300} />
      <h2 className="mt-4 text-lg font-semibold text-gray-900">{name}</h2>
      <p className="mt-2 text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

export default ProductDisplay;