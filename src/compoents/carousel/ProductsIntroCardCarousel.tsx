"use client";

import { Product } from "@/types";
import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigationButtons from "./CarouselNavigationButtons";
import clsx from "clsx";
import ProductCard from "../ui/ProductCard";

interface ProductsIntroCardCarouselProps {
  products: Product[];
  backgroundClass: string;
  FirstSlideContent: React.ReactNode;
}

const ProductsIntroCardCarousel = ({
  products,
  backgroundClass,
  FirstSlideContent,
}: ProductsIntroCardCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: true,
    watchDrag: false,
    breakpoints: {
      "(max-width: 1023px)": { active: false },
    },
  });

  return (
    <section className="lg:ui-container">
      <div
        className={clsx(
          "py-4 lg:rounded-2xl bg-cover bg-no-repeat relative",
          backgroundClass
        )}
      >
        {/* Embla viewport */}
        <div
          className="lg:overflow-hidden overflow-x-auto scrollbar-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            <div className="min-w-36 sm:min-w-40 px-4 relative">
              <div className="mt-[40%]">{FirstSlideContent}</div>
            </div>

            {products.map((product) => (
              <div key={product.id} className="min-w-37 sm:min-w-44 pe-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <CarouselNavigationButtons emblaApi={emblaApi} />
      </div>
    </section>
  );
};

export default ProductsIntroCardCarousel;
