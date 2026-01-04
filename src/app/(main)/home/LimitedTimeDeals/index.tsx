import DealCountdown from "./DealCountdown";
import ProductsIntroCardCarousel from "@/components/carousel/ProductsIntroCardCarousel";
import { products } from "@/data/products";

const LimitedTimeDeals = () => {
  return (
    <ProductsIntroCardCarousel
      products={products}
      backgroundClass="bg-[url('https://cdn.pixelbin.io/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1744973571196.png')]"
      FirstSlideContent={<DealCountdown />}
    />
  );
};

export default LimitedTimeDeals;
