"use client";

import CarouselNavigationButtons from "@/compoents/carousel/CarouselNavigationButtons";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const a = [
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1737548272526.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1729834706733.png",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1729834753447.png",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1729834825584.png",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1729834885507.png",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1729834790466.png",
];

const SpecializedStores = () => {
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
      <h3 className="px-3 lg:px-0 lg:text-2xl font-black">Specialized Stores</h3>

      <div className="py-4 relative">
        {/* Carousel */}
        <div
          ref={emblaRef}
          className="overflow-x-auto lg:overflow-hidden [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex lg:-ml-3">
            {a.map((image, index) => (
              <div
                key={index}
                className={clsx(
                  "min-w-0 pl-3",
                  "flex-[0_0_40%] lg:flex-[0_0_20%]",
                  "last:flex-[0_0_calc(40%+12px)] last:pr-3 lg:last:flex-[0_0_20%] lg:last:pr-0"
                )}
              >
                <div>
                  <Image
                    width={256}
                    height={320}
                    src={image}
                    alt={`Specialized Store ${index + 1}`}
                    className="w-full aspect-4/5 rounded-2xl object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <CarouselNavigationButtons emblaApi={emblaApi} />
      </div>
    </div>
  );
};

export default SpecializedStores;
