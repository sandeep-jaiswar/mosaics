"use client";

import Image from "next/image";
import { useState } from "react";

const PDPImageDisplaySection = ({ images }: { images: string[] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];
  return (
    <div className="flex flex-col h-full w-full">
      <div className="relative h-[700px] w-[600px] mx-auto">
        <Image
          src={currentImage}
          alt="Product Image"
          width={600}
          height={700}
          className="object-contain h-full w-full"
        />
      </div>
      <div className="flex justify-center mt-4 gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-16 h-16 cursor-pointer ${
              currentImageIndex === index ? "border-2 border-gray-800" : ""
            }`}
          >
            <Image
              src={image}
              width={64}
              height={64}
              alt="Product Image"
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDPImageDisplaySection;
