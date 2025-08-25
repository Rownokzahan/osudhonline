"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import CarouselNavigationButtons from "@/compoents/carousel/CarouselNavigationButtons";
import CarouselDots from "@/compoents/carousel/CarouselDots";

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

const BannerSlider = () => {
  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

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

      <CarouselNavigationButtons emblaApi={emblaApi} />
      <CarouselDots emblaApi={emblaApi} />
    </div>
  );
};

export default BannerSlider;
