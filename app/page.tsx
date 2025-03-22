import { v4 as uuidv4 } from "uuid";
import FilterSection from "@/components/FilterSection";
import ProductDisplaySection from "@/components/ProductDisplaySection";

export default function Home() {
  const products = [
    {
      id: uuidv4(),
      name: "The Indian Garage Co",
      description: "Men Tartan Checked Cotton Casual Shirt",
      imgUrls: [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
      ],
      price: 1000,
      rating: 0,
      discount: 10,
      priceAfterDiscount: 900,
    },
    {
      id: uuidv4(),
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
    },
    {
      id: uuidv4(),
      name: "The Indian Garage Co",
      description: "Men Tartan Checked Cotton Casual Shirt",
      imgUrls: [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
      ],
      price: 1000,
      rating: 0,
      discount: 10,
      priceAfterDiscount: 900,
    },
    {
      id: uuidv4(),
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
    },
    {
      id: uuidv4(),
      name: "The Indian Garage Co",
      description: "Men Tartan Checked Cotton Casual Shirt",
      imgUrls: [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
      ],
      price: 1000,
      rating: 0,
      discount: 10,
      priceAfterDiscount: 900,
    },
    {
      id: uuidv4(),
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
    },
  ];
  return (
    <div className="font-[family-name:var(--font-balsamiq-sans)] p-5 max-w-5xl mx-auto">
      <div className="grid grid-cols-5 gap-7 my-20">
        <FilterSection />
        <ProductDisplaySection products={products} />
      </div>
    </div>
  );
}
