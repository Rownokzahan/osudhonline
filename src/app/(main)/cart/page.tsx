import ProductsCarousel from "@/compoents/carousel/ProductsCarousel";
import { products } from "@/data/products";
import Link from "next/link";
import EmptyCart from "./components/EmptyCart";
import CartItemList from "./components/CartItemList";

const CartPage = () => {
  return (
    <div className="lg:ui-container">
      <section className="border-b">
        <h3 className="font-black text-2xl">My Cart</h3>
        <div className="my-6">
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <CartItemList />

            <div className="h-max sticky top-36 space-y-4">
              <div className="p-6 rounded-2xl bg-gray-200">
                <div className="rounded-2xl bg-white">
                  <div className="p-4">
                    <h3 className="font-black">Payment details</h3>
                  </div>

                  <div className="px-4 pb-3 space-y-2 text-dark-light">
                    <div className="flex justify-between">
                      <p>MRP Total</p>
                      <p>₹2,600.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Product Discount</p>
                      <p className="text-success">-₹500.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Delivery Fee</p>
                      <p className="text-success">FREE</p>
                    </div>
                  </div>

                  <div className="p-4 pt-3 border-t flex justify-between font-bold">
                    <p>Total Payable</p>
                    <p>₹{"2,100.00"}</p>
                  </div>
                </div>
              </div>

              <button className="w-full px-6 py-4 rounded-full bg-primary text-dark-primary font-bold">
                Login
              </button>
            </div>
          </div>

          <EmptyCart />
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
