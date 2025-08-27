"use client";

import useEmblaCarousel from "embla-carousel-react";
import CarouselNavigationButtons from "../CarouselNavigationButtons";

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
      "(max-width: 1023px)": { active: false },
    },
  });

  return (
    <div className="lg:ui-container">
      {title && (
        <h3 className="mt-4 px-3 lg:px-0 sm:text-xl lg:text-2xl font-black">
          {title}
        </h3>
      )}

      <div className="py-4 relative">
        {/* Carousel */}
        <div
          ref={emblaRef}
          className="overflow-x-auto lg:overflow-hidden scrollbar-hidden"
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
