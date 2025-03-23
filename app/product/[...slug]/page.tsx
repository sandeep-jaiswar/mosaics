import PDPImageDisplaySection from "@/components/PDPImageDisplaySection";

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const data = {
    id: "55854ea2-2fb8-447f-b47d-819da3a1b598",
    name: "Sangria",
    description: "Women Embroidery Fit & Flare Dress",
    imgUrls: [
      "/images/7.jpg",
      "/images/8.jpg",
      "/images/9.jpg",
      "/images/10.jpg",
      "/images/11.jpg",
    ],
    price: 1000,
    rating: 0,
    discount: 10,
    priceAfterDiscount: 900,
    specifications: {
      brand: "Sangria",
      color: "Blue",
      fabric: "Cotton",
      pattern: "Embroidered",
      size: "S",
      sleeve: "3/4 Sleeve",
      neck: "Round Neck",
      fit: "Regular",
      length: "Knee Length",
      occasion: "Casual",
    },
  };
  const { imgUrls, description, name, price, priceAfterDiscount, discount } =
    data;
  return (
    <div className="font-[family-name:var(--font-balsamiq-sans)] py-5 max-w-5xl mx-auto">
      <div className="grid grid-cols-5 gap-7 my-20">
        <div className="col-span-3">
          <PDPImageDisplaySection images={imgUrls} />
        </div>
        <div className="col-span-2">
          <div className="text-gray-600">{`ProductID: ${slug}`}</div>
          <div className="text-xl">{name}</div>
          <div className="text-md text-grey-600">{description}</div>
          <div className="text-gray-600 text-sm self-start line-clamp-2 w-full mb-4">
            <span className="font-semibold text-gray-900 mr-1">{`₹ ${priceAfterDiscount}`}</span>
            <span className="line-through mr-1 text-sm">{`₹ ${price}`}</span>
            <span className="text-red-600">{`(${discount}% OFF)`}</span>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="bg-red-600 text-white px-4 py-2">
              Add to Cart
            </button>
            <button className="bg-black text-white px-4 py-2">Buy Now</button>
          </div>
          <hr />
          <div className="my-4">
            <h2 className="">Product Details</h2>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
          <div className="my-4">
            <h2 className="">Specifications</h2>
            <ul className="text-gray-600 text-sm">
              {Object.entries(data.specifications).map(([key, value]) => (
                <li key={key}>
                  <span className="font-semibold">{key}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-4">
            <h2 className="">Return Policy</h2>
            <p className="text-gray-600 text-sm">7 Days Return Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
