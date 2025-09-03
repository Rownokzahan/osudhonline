import AddToCartButton from "@/compoents/cards/ProductCard/AddToCartButton";
import ProductImageCarouselDesktop from "./ProductImageCarouselDesktop";
import SaveButton from "@/compoents/cards/ProductCard/SaveButton";
import { PiShareFatFill } from "react-icons/pi";
import ProductDetails from "../ProductDetails";
import ProductGuarantees from "../ProductGuarantees";
import Breadcrumb from "./Breadcrumb";
import ProductsCarousel from "@/compoents/carousel/ProductsCarousel";
import { products } from "@/data/products";

const ProductPageDesktop = () => {
  return (
    <div className="ui-container">
      <Breadcrumb />

      <div className="flex gap-12 relative">
        <div className="h-max mb-2 sticky top-[130px] space-y-3">
          <ProductImageCarouselDesktop />
          <AddToCartButton productId="01" className="!w-92 ms-auto me-2" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-secondary">Sugar Free</h3>
              <h2 className="text-2xl font-bold">
                Sugar Free Natura Powder 100 gm
              </h2>

              <div className="mt-1 w-max px-2 py-1 bg-gray-100 rounded-lg">
                <p className="text-dark-light font-bold">
                  Sugar Substitutes (Fitness)
                </p>
              </div>

              <div className="mt-4 flex items-end gap-1">
                <h2 className="text-2xl font-black">₹148.50</h2>
                <h3 className="text-tertiary font-bold text-lg">10% OFF</h3>
              </div>
              <p className="text-dark-light">MRP ₹165(incl. of all taxes)</p>
            </div>

            <div className="flex gap-1">
              <SaveButton productId="01" />
              <button>
                <PiShareFatFill size={24} className="text-dark-light" />
              </button>
            </div>
          </div>

          <hr className="my-6" />

          <ProductGuarantees />
          <ProductDetails />

          <ProductsCarousel label="Similar products" products={products} />
          <ProductsCarousel
            label="Frequently bought together"
            products={products}
          />
        </div>
      </div>

      <div className="my-6 h-2 bg-dark-light/8" />

      <ProductsCarousel label="Recently viewed products" products={products} />
    </div>
  );
};

export default ProductPageDesktop;
