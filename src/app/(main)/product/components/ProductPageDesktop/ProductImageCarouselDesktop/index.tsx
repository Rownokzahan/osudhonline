"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ImageZoomer from "./ImageZoomer";

const images = [
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/o4fgE2FgAG-sugar_free_gold_sachet_100s_0_3.jpg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/efN7ISuGN3-sugar_free_gold_sachet_100s_1_2.jpg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/LvB0ALayq_-sugar_free_gold_sachet_100s_2_2.jpg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/HQHwhytFA6-sugar_free_gold_sachet_100s_3_2.jpg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:400/09DPUumzr7-sugar_free_gold_sachet_100s_4_2.jpg",
];

const ProductImageCarouselDesktop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLElement | null)[]>([]);

  const handleMouseOver = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    // Scroll active thumbnail into view
    thumbnailRefs.current[currentIndex]?.scrollIntoView({
      behavior: "instant",
      block: "nearest",
    });
  }, [currentIndex]);

  return (
    <div className="flex items-center gap-4">
      <div>
        <button
          onClick={handlePrev}
          className="mx-1 w-17 h-8 border rounded-xl grid place-items-center"
        >
          <FaChevronUp />
        </button>

        <div className="h-96 overflow-y-auto overflow-x-hidden scrollbar-hidden">
          {images.map((_, index) => (
            <figure
              ref={(el) => {
                thumbnailRefs.current[index] = el;
              }}
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              className="pt-4 last:pb-4"
            >
              <Image
                width={400}
                height={400}
                src={images[index]}
                alt={`Thumbnail ${index}`}
                className={clsx(
                  "mx-px size-19 rounded-xl object-cover border border-dark-light/60",
                  index === currentIndex && "outline outline-accent"
                )}
              />
            </figure>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="mx-1 w-17 h-8 border rounded-xl grid place-items-center"
        >
          <FaChevronDown />
        </button>
      </div>

      <figure className="size-96">
        <ImageZoomer imageSrc={images[currentIndex]} />
      </figure>
    </div>
  );
};

export default ProductImageCarouselDesktop;
