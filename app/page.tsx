import FilterSection from "@/components/FilterSection";
import ProductDisplaySection from "@/components/ProductDisplaySection";
import { fetchAllProducts } from "@/utils/helper";

const fetchProducts = async () => {
  try {
    const products = await fetchAllProducts();
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

const Home = async () => {
  const data = await fetchProducts();
  return (
    <div className="font-[family-name:var(--font-balsamiq-sans)] max-w-5xl mx-auto py-5">
      <div className="grid grid-cols-5 gap-7 my-20">
        <FilterSection />
        <ProductDisplaySection products={data} />
      </div>
    </div>
  );
}

export default Home;
