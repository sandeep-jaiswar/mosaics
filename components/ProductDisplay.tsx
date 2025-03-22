import { Product } from "@/types/product";
import Image from "next/image";

const ProductDisplay = ({
  name,
  imgUrls,
  discount,
  price,
  priceAfterDiscount,
}: Product) => {
  if (!imgUrls || imgUrls.length === 0) return null;

  const imgSrc = imgUrls[0];
  const imgAlt = `${name} image`;

  return (
    <div className="flex flex-col items-center bg-white hover:shadow w-full cursor-pointer col-span-1 p-2 border border-gray-200">
      <div className="relative w-full h-[250px] overflow-hidden pb-2">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={200}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="self-start truncate w-full">
        {name}
      </h2>
      <p className="text-gray-600 text-sm self-start line-clamp-2 w-full">
        <span className="font-semibold text-gray-900 mr-1">{`₹ ${priceAfterDiscount}`}</span>
        <span className="line-through mr-1 text-sm">{`₹ ${price}`}</span>
        <span className="text-red-600">{`(${discount}% OFF)`}</span>
      </p>
    </div>
  );
};

export default ProductDisplay;
