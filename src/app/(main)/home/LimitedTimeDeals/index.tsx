"use client";

import ProductCard from "@/compoents/cards/ProductCard";
import { products } from "@/data/products";
import useEmblaCarousel from "embla-carousel-react";
import DealCountdown from "./DealCountdown";
import CarouselNavigationButtons from "@/compoents/carousel/CarouselNavigationButtons";

const LimitedTimeDeals = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: true,
    watchDrag: false,
    breakpoints: {
      "(max-width: 1224px)": { active: false },
    },
  });

  return (
    <section className="lg:ui-container">
      <div
        className="py-4 lg:rounded-2xl bg-cover bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('https://cdn.pixelbin.io/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1744973571196.png')",
        }}
      >
        {/* Embla viewport */}
        <div
          className="lg:overflow-hidden overflow-x-auto [&::-webkit-scrollbar]:hidden"
          ref={emblaRef}
        >
          <div className="flex">
            <DealCountdown />

            {products.map((product) => (
              <div key={product.id} className="min-w-37 sm:min-w-44 pe-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <CarouselNavigationButtons emblaApi={emblaApi}/>
      </div>
    </section>
  );
};

export default LimitedTimeDeals;
