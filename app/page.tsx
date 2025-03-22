import { v4 as uuidv4 } from "uuid";
import FilterSection from "@/components/FilterSection";
import ProductDisplaySection from "@/components/ProductDisplaySection";

export default function Home() {
  const products = [
    {
      id: uuidv4(),
      name: "Product 1",
      description: "Description 1",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 2",
      description: "Description 2",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 3",
      description: "Description 3",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 1",
      description: "Description 1",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 2",
      description: "Description 2",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 3",
      description: "Description 3",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 1",
      description: "Description 1",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 2",
      description: "Description 2",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 3",
      description: "Description 3",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 1",
      description: "Description 1",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 2",
      description: "Description 2",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 3",
      description: "Description 3",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 1",
      description: "Description 1",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 2",
      description: "Description 2",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 3",
      description: "Description 3",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 1",
      description: "Description 1",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 2",
      description: "Description 2",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 3",
      description: "Description 3",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 1",
      description: "Description 1",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 2",
      description: "Description 2",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 3",
      description: "Description 3",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 1",
      description: "Description 1",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 2",
      description: "Description 2",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 3",
      description: "Description 3",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 1",
      description: "Description 1",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 2",
      description: "Description 2",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
    {
      id: uuidv4(),
      name: "Product 3",
      description: "Description 3",
      imgUrls: [
        "https://genericapi.s3.ap-south-1.amazonaws.com/1aa324e4-6230-4cf9-a50c-a37413eab1381598892519266-Nike-1689412478311-917905616.jpeg",
      ],
      price: 0,
      rating: 0,
      discount: 0,
      priceAfterDiscount: 0,
    },
  ];
  return (
    <div className="font-[family-name:var(--font-balsamiq-sans)] p-5">
      <div className="grid grid-cols-5 gap-7 m-20">
        <FilterSection />
        <ProductDisplaySection products={products} />
      </div>
    </div>
  );
}
