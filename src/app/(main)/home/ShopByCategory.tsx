"use client";

import CarouselNavigationButtons from "@/compoents/carousel/CarouselNavigationButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const categories = [
  {
    id: "personal-care",
    name: "Personal Care",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711690901322.png",
  },
  {
    id: "fitness",
    name: "Fitness",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711690762727.png",
  },
  {
    id: "ayush",
    name: "Ayurveda",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711690992237.png",
  },
  {
    id: "devices",
    name: "Devices",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1710932808118.png",
  },
  {
    id: "homeopathy",
    name: "Homeopathy",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1712043454322.png",
  },
  {
    id: "mom-and-baby",
    name: "Mom & Baby",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1716811610519.png",
  },
  {
    id: "sexual-wellness",
    name: "Sexual Wellness",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711690714453.png",
  },
  {
    id: "surgicals",
    name: "Surgicals",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711690782716.png",
  },
  {
    id: "treatments",
    name: "Treatments",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711690828113.png",
  },
  {
    id: "veterinary",
    name: "Veterinary",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711690933374.png",
  },
  {
    id: "eyewear",
    name: "Eyewear",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711691035948.png",
  },
];

const ShopByCategory = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      watchDrag: false,
      breakpoints: {
        "(max-width: 768px)": { active: false },
      },
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: true,
      }),
    ]
  );

  return (
    <section className="ui-container">
      <h3 className="lg:text-2xl font-black">Shop By Category</h3>

      <div className="py-4 relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="grid grid-cols-4 gap-3 md:flex">
            {categories.map((category) => (
              <div key={category.id} className="md:min-w-50 md:pe-4">
                <Image
                  width={256}
                  height={256}
                  src={category.image}
                  alt={""}
                  className="w-full aspect-square object-cover"
                />
                <p className="mt-1 text-xs md:text-lg text-center font-medium md:truncate">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <CarouselNavigationButtons emblaApi={emblaApi} />
      </div>
    </section>
  );
};

export default ShopByCategory;
