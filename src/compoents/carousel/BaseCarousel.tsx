"use client";

import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigationButtons from "./CarouselNavigationButtons";

interface BaseCarouselProps {
  title?: string;
  children: React.ReactNode;
}

const BaseCarousel = ({ title, children }: BaseCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: true,
    align: "start",
    watchDrag: false,
    breakpoints: {
      "(max-width: 1224px)": { active: false },
    },
  });

  return (
    <div className="lg:ui-container mt-4">
      {title && (
        <h3 className="px-3 lg:px-0 lg:text-2xl font-black">{title}</h3>
      )}

      <div className="py-4 relative">
        {/* Carousel */}
        <div
          ref={emblaRef}
          className="overflow-x-auto lg:overflow-hidden [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex lg:-ml-3">{children}</div>
        </div>

        {/* Navigation Buttons */}
        <CarouselNavigationButtons emblaApi={emblaApi} />
      </div>
    </div>
  );
};

export default BaseCarousel;
