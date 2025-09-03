"use client";

import { Product } from "@/types";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "../cards/ProductCard";
import CarouselNavigationButtons from "./CarouselNavigationButtons";

interface ProductsCarouselProps {
  label: string;
  products: Product[];
}

const ProductsCarousel = ({ label, products }: ProductsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: true,
    align: "start",
    watchDrag: false,
    breakpoints: {
      "(max-width: 1023px)": { active: false },
    },
  });

  return (
    <section className="mt-6">
      <h3 className="mb-1 text-2xl font-black">{label}</h3>

      <div className="relative">
        <div ref={emblaRef} className="py-2 px-1 overflow-hidden">
          <div className="flex -ms-2">
            {products.map((product) => (
              <div key={product.id} className="min-w-37 sm:min-w-54 px-2">
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
