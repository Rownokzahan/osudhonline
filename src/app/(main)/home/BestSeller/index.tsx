import ProductsIntroCardCarousel from "@/components/carousel/ProductsIntroCardCarousel";
import { products } from "@/data/products";
import Image from "next/image";

const BestSeller = () => {
  return (
    <ProductsIntroCardCarousel
      products={products}
      backgroundClass="bg-[#f9e8e0]"
      FirstSlideContent={
        <>
          <Image
            width={520}
            height={576}
            src="https://cdn.pixelbin.io/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1754635488903.png"
            alt=""
            className="size-16"
          />
          <h3 className="mt-4 font-black md:text-2xl">Best Seller</h3>
          <p className="mt-2 text-sm">Upto 40% off</p>
        </>
      }
    />
  );
};

export default BestSeller;
