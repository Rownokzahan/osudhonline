"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from "embla-carousel";
import clsx from "clsx";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const carouselImages = [
  {
    id: 1,
    href: "",
    alt: "Cetaphil Promotion",
    images: {
      desktop:
        "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:1280/theme-image-1754031982823.jpeg?dpr=1",
      mobile:
        "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:360/theme-image-1754032097270.jpeg?dpr=2",
    },
  },
  {
    id: 2,
    href: "",
    alt: "Truuth Ortho Sale",
    images: {
      desktop:
        "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:1280/theme-image-1754633439733.jpeg?dpr=1",
      mobile:
        "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:360/theme-image-1754633956293.jpeg?dpr=2",
    },
  },
  {
    id: 3,
    href: "",
    alt: "Dinypar Promotion",
    images: {
      desktop:
        "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:1280/theme-image-1755493826101.png?dpr=1",
      mobile:
        "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:360/theme-image-1755493989190.png?dpr=2",
    },
  },
  {
    id: 4,
    href: "",
    alt: "Mediynth Promotion",
    images: {
      desktop:
        "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:1280/theme-image-1755013452866.jpeg?dpr=1",
      mobile:
        "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:360/theme-image-1755013664615.jpeg?dpr=2",
    },
  },
];

const NavigationButton = ({
  position,
  emblaApi,
}: {
  position: "next" | "prev";
  emblaApi?: EmblaCarouselType;
}) => {
  const handleClick = () => {
    if (!emblaApi) return;
    return position === "prev" ? emblaApi.scrollPrev() : emblaApi.scrollNext();
  };

  return (
    <button
      onClick={handleClick}
      aria-label={position === "prev" ? "Previous slide" : "Next slide"}
      className={clsx(
        "size-12 border rounded-full grid bg-white absolute top-1/2 -translate-y-1/2",
        {
          "left-8": position === "prev",
          "right-8": position === "next",
        }
      )}
    >
      <MdKeyboardArrowRight
        size={24}
        className={clsx(
          "text-secondary place-self-center",
          position === "prev" && "rotate-180"
        )}
      />
    </button>
  );
};

const BannerSlider = () => {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Dots
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="lg:ui-container sm:py-3 relative z-0">
      {/* Slider */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselImages.map((item) => {
            const { id, href, images, alt } = item;
            return (
              <Link href={href} key={id} className="min-w-full">
                <picture>
                  {/* Large screens */}
                  <source media="(min-width: 641px)" srcSet={images.desktop} />

                  {/* Fallback image for mobile screens */}
                  <img
                    src={images.mobile}
                    alt={alt}
                    className="w-full aspect-2/1 sm:aspect-4/1 object-cover sm:text-sm"
                  />
                </picture>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="hidden lg:block">
        <NavigationButton position="prev" emblaApi={emblaApi} />
        <NavigationButton position="next" emblaApi={emblaApi} />
      </div>

      {/* Dots */}
      <div className="mt-3 flex justify-center items-center">
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            className={clsx(
              "h-2 rounded-full mx-[6px] duration-300 transition-all ease-in-out",
              idx === selectedIndex ? "w-6 bg-secondary" : "w-2 bg-secondary/30"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
