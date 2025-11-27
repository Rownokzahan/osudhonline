import ProductsCarousel from "@/compoents/carousel/ProductsCarousel";
import { products } from "@/data/products";
import CartContent from "./components/CartContent";

const CartPage = () => {
  return (
    <div className="lg:ui-container">
      <section className="mt-4 border-b">
        <h3 className="mb-4 md:mx-4 lg:mx-0 px-4 sm:px-0 sm:text-2xl font-black">
          My Cart
        </h3>

        <div className="mb-6">
          <CartContent />
        </div>
      </section>

      <section className="mt-6">
        <ProductsCarousel
          label="Featured products"
          products={products}
          className="sm:px-4 lg:px-0"
        />
      </section>
    </div>
  );
};

export default CartPage;
