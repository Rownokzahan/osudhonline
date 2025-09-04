import ProductsCarousel from "@/compoents/carousel/ProductsCarousel";
import { products } from "@/data/products";
import RatingsAndReviews from "./components/RatingsAndReviews";
import Breadcrumb from "./components/Breadcrumb";
import ProductImageCarouselDesktop from "./components/ProductImageCarouselDesktop";
import AddToCartButton from "@/compoents/cards/ProductCard/AddToCartButton";
import ProductGuarantees from "./components/ProductGuarantees";
import ProductDetails from "./components/ProductDetails";
import ProductImageCarouselMobile from "./components/ProductImageCarouselMobile";
import SaveButton from "@/compoents/cards/ProductCard/SaveButton";
import { PiShareFatFill } from "react-icons/pi";

const ProductPage = () => {
  return (
    <>
      <Breadcrumb />

      <div className="lg:ui-container lg:flex gap-12">
        <div className="hidden lg:block h-max mb-2 sticky z-10 top-[130px] space-y-3">
          <ProductImageCarouselDesktop />
          <AddToCartButton productId="01" className="!w-92 ms-auto me-2" />
        </div>

        <div className="lg:hidden relative">
          <ProductImageCarouselMobile />

          <div className="absolute top-0 right-2 flex flex-col gap-2">
            <SaveButton productId="01" />
            <button>
              <PiShareFatFill size={24} className="text-dark-light" />
            </button>
          </div>
        </div>

        <div className="flex-1 min-w-0">
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

      <section className="ui-container my-6">
        <div className="h-2 bg-dark-light/8" />
      </section>

      <RatingsAndReviews />

      <ProductsCarousel
        label="Recently viewed products"
        products={products}
        className="sm:ui-container"
      />

      <section className="ui-container my-6">
        <div className="h-2 bg-dark-light/8" />
      </section>

      <section className="ui-container my-6 space-y-3">
        <h3 className="font-black">Disclaimer</h3>
        <p>
          The contents of this website are for informational purposes only and
          not intended to be a substitute for professional medical advice,
          diagnosis, or treatment. Please seek the advice of a physician or
          other qualified health provider with any questions you may have
          regarding a medical condition. Do not disregard professional medical
          advice or delay in seeking it because of something you have read on
          this website.
        </p>
      </section>
    </>
  );
};

export default ProductPage;
