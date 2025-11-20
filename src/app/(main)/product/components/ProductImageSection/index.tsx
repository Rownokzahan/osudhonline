import AddToCartButton from "@/compoents/cards/ProductCard/AddToCartButton";
import ProductImageCarouselDesktop from "./ProductImageCarouselDesktop";
import ProductImageCarouselMobile from "./ProductImageCarouselMobile";
import SaveButton from "@/compoents/cards/ProductCard/SaveButton";
import { PiShareFatFill } from "react-icons/pi";

const ProductImageSection = () => {
  return (
    <>
      <div className="hidden lg:block h-max mb-2 sticky z-10 top-[130px] space-y-3">
        <ProductImageCarouselDesktop />
        <AddToCartButton productId="01" className="w-92! ms-auto me-2" />
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
    </>
  );
};

export default ProductImageSection;