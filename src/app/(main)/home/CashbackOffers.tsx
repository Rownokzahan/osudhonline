"use client";

import CarouselNavigationButtons from "@/compoents/carousel/CarouselNavigationButtons";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const sliderImages = [
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:640/theme-image-1750851318549.png?dpr=1",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:640/theme-image-1755307838926.png?dpr=1",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:640/theme-image-1754399106743.png?dpr=1",
];

const CashbackOffers = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: true,
    align: "start",
    watchDrag: false,
    breakpoints: {
      "(max-width: 1224px)": { active: false },
    },
  });

  return (
    <div className="lg:ui-container py-4 relative">
      {/* Carousel */}
      <div
        ref={emblaRef}
        className="overflow-x-auto lg:overflow-hidden [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex lg:-ml-3">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={clsx(
                "min-w-0 pl-3",
                "flex-[0_0_calc(100%-12px)] lg:flex-[0_0_50%]",
                "last:flex-[0_0_100%] last:pr-3 lg:last:flex-[0_0_50%] lg:last:pr-0"
              )}
            >
              <Image
                width={640}
                height={160}
                src={image}
                alt={`Specialized Store ${index + 1}`}
                className="w-full aspect-4/1 rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <CarouselNavigationButtons emblaApi={emblaApi} />
    </div>
  );
};

export default CashbackOffers;
