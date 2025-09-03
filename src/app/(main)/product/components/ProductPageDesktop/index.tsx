import AddToCartButton from "@/compoents/cards/ProductCard/AddToCartButton";
import ProductImageCarouselDesktop from "./ProductImageCarouselDesktop";
import SaveButton from "@/compoents/cards/ProductCard/SaveButton";
import { PiShareFatFill } from "react-icons/pi";
import ProductDetails from "../ProductDetails";
import ProductGuarantees from "../ProductGuarantees";
import Breadcrumb from "./Breadcrumb";

const ProductPageDesktop = () => {
  return (
    <>
      <Breadcrumb />

      <div className="ui-container flex gap-12 relative">
        <div className="h-max sticky top-[130px] space-y-3">
          <ProductImageCarouselDesktop />
          <AddToCartButton productId="01" className="!w-92 ms-auto me-2" />
        </div>

        <div className="flex-1">
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

          <hr className="my-4" />

          <ProductGuarantees />
          <ProductDetails />
        </div>
      </div>
    </>
  );
};

export default ProductPageDesktop;
