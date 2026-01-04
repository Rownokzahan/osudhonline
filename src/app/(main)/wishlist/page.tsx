import ProductsCarousel from "@/components/carousel/ProductsCarousel";
import WishlistProducts from "./components/WishlistProducts";
import { products } from "@/data/products";

const WishlistPage = () => {
  return (
    <>
      <div className="ui-container mt-4 mb-2 sm:my-6">
        <h1 className="text-2xl font-black">Saved for later</h1>
      </div>

      <WishlistProducts />

      <div className="mt-8 ui-container">
        <ProductsCarousel
          label="Recently viewed products"
          products={products}
        />
      </div>
    </>
  );
};

export default WishlistPage;
