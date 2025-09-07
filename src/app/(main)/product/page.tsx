import ProductsCarousel from "@/compoents/carousel/ProductsCarousel";
import { products } from "@/data/products";
import RatingsAndReviews from "./components/RatingsAndReviews";
import Breadcrumb from "./components/Breadcrumb";
import AddToCartButton from "@/compoents/cards/ProductCard/AddToCartButton";
import ProductGuarantees from "./components/ProductGuarantees";
import ProductDetails from "./components/ProductDetails";
import SaveButton from "@/compoents/cards/ProductCard/SaveButton";
import { PiShareFatFill } from "react-icons/pi";
import Divider from "./components/Divider";
import ProductDisclaimer from "./components/ProductDisclaimer";
import ProductImageSection from "./components/ProductImageSection";

const ProductPage = () => {
  return (
    <>
      <Breadcrumb />

      <div className="lg:ui-container lg:flex gap-12">
        <ProductImageSection />

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div className="px-4 lg:px-0">
              <h3 className="text-xs sm:text-lg sm:font-bold text-secondary">
                Sugar Free
              </h3>
              <h2 className="text-lg sm:text-2xl font-bold">
                Sugar Free Natura Powder 100 gm
              </h2>

              <div className="mt-1 w-max px-2 py-1 bg-gray-100 rounded-lg">
                <p className="text-xs sm:text-base text-dark-light font-bold">
                  Sugar Substitutes (Fitness)
                </p>
              </div>
            </div>

            <div className="hidden lg:flex gap-1">
              <SaveButton productId="01" />
              <button>
                <PiShareFatFill size={24} className="text-dark-light" />
              </button>
            </div>
          </div>

          <div className="mt-4 px-4 lg:px-0 flex justify-between">
            <div className="">
              <div className="flex items-end gap-1">
                <h2 className="font-bold sm:text-2xl sm:font-black">₹148.50</h2>
                <h3 className="text-tertiary font-bold text-xs sm:text-lg">
                  10% OFF
                </h3>
              </div>
              <p className="text-dark-light text-xs sm:text-base">
                MRP ₹165(incl. of all taxes)
              </p>
            </div>

            <AddToCartButton productId="01" className="lg:hidden" />
          </div>

          <ProductGuarantees />
          <ProductDetails />
          <ProductsCarousel
            label="Similar products"
            products={products}
            className="sm:px-4 lg:px-0"
          />
          <ProductsCarousel
            label="Frequently bought together"
            products={products}
            className="sm:px-4 lg:px-0"
          />
        </div>
      </div>

      <Divider />

      <RatingsAndReviews />

      <ProductsCarousel
        label="Recently viewed products"
        products={products}
        className="sm:ui-container"
      />

      <Divider />
      <ProductDisclaimer />
    </>
  );
};

export default ProductPage;
