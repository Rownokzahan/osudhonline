"use client";

import CarouselDots from "@/compoents/carousel/CarouselDots";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const images = [
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/o4fgE2FgAG-sugar_free_gold_sachet_100s_0_3.jpg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/efN7ISuGN3-sugar_free_gold_sachet_100s_1_2.jpg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/LvB0ALayq_-sugar_free_gold_sachet_100s_2_2.jpg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/HQHwhytFA6-sugar_free_gold_sachet_100s_3_2.jpg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/09DPUumzr7-sugar_free_gold_sachet_100s_4_2.jpg",
];

const ProductImageCarouselMobile = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  return (
    <div className="max-w-98 px-10 my-6 mx-auto">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((image, idx) => (
            <figure key={idx} className="min-w-full">
              <Image
                width={400}
                height={400}
                src={image}
                alt=""
                className="w-full"
              />
            </figure>
          ))}
        </div>
      </div>

      <CarouselDots emblaApi={emblaApi} />
    </div>
  );
};

export default ProductImageCarouselMobile;
