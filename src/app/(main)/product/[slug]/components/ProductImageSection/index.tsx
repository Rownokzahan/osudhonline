import AddToCartButton from "@/components/ui/AddToCartButton";
import ProductImageCarouselDesktop from "./ProductImageCarouselDesktop";
import ProductImageCarouselMobile from "./ProductImageCarouselMobile";
import { PiShareFatFill } from "react-icons/pi";
import SaveButton from "@/components/ui/SaveButton";

const ProductImageSection = () => {
  return (
    <>
      <div className="hidden lg:block h-max mb-2 sticky z-10 top-[130px] space-y-3">
        <ProductImageCarouselDesktop />
        <AddToCartButton productId="01" className="w-92! ms-auto me-2" />
      </div>

      <div className="lg:hidden relative me-2">
        <ProductImageCarouselMobile />

        <SaveButton productId="01" />

        <div className="absolute top-10 right-1">
          <button>
            <PiShareFatFill size={22} className="text-dark-light" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductImageSection;
