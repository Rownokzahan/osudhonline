"use client";

import { Product } from "@/types";
import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigationButtons from "./CarouselNavigationButtons";
import clsx from "clsx";
import ProductCard from "../ui/ProductCard";

interface ProductsCarouselProps {
  label: string;
  products: Product[];
  className?: string;
}

const ProductsCarousel = ({
  label,
  products,
  className,
}: ProductsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: true,
    align: "start",
    // watchDrag: false,
    breakpoints: {
      "(max-width: 1023px)": { active: false },
    },
  });

  return (
    <section className={clsx("mt-6", className)}>
      <h3 className="mb-2 px-4 sm:px-0 sm:text-2xl font-black">{label}</h3>

      <div className="relative">
        <div
          ref={emblaRef}
          className="py-2 overflow-x-auto lg:overflow-hidden scrollbar-hidden"
        >
          <div className="flex">
            {products.map((product) => (
              <div
                key={product.id}
                className={clsx(
                  "min-w-43 sm:min-w-54 first:min-w-47 first:sm:min-w-54",
                  "pe-4 first:sm:pl-0! first:pl-4"
                )}
              >
                <div className="shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] rounded-lg">
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <CarouselNavigationButtons emblaApi={emblaApi} />
      </div>
    </section>
  );
};

export default ProductsCarousel;
