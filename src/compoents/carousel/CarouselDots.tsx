import clsx from "clsx";
import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

interface CarouselDotsProps {
  emblaApi: EmblaCarouselType | undefined;
}

const CarouselDots = ({ emblaApi }: CarouselDotsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="mt-3 flex justify-center items-center">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotButtonClick(index)}
          className={clsx(
            "h-2 rounded-full mx-[6px] duration-300 transition-all ease-in-out",
            index === selectedIndex ? "w-6 bg-secondary" : "w-2 bg-secondary/30"
          )}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
