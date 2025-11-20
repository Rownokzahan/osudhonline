import ProductsCarousel from "@/compoents/carousel/ProductsCarousel";
import { products } from "@/data/products";
import Link from "next/link";
import { TbShoppingCartSearch } from "react-icons/tb";

const CartPage = () => {
  return (
    <div className="lg:ui-container">
      <section className="border-b">
        <h3 className="font-black text-2xl">My Cart</h3>
        <div className="my-6 px-2">
          <div className="w-max mx-auto mb-2 opacity-40">
            <TbShoppingCartSearch size={120} />
          </div>

          <div className="text-center text-dark-light font-medium">
            <h4 className="font-black text-dark">No items in cart</h4>

            <p className="mt-1 text-sm">
              It’s never too late! Add items you saved for later.
            </p>

            <div className="mt-2 text-sm flex gap-1 justify-center">
              <span>or</span>
              <Link href={"/"} className="font-semibold text-secondary">
                Continue Shopping
              </Link>
            </div>
          </div>
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
