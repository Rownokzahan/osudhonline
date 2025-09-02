"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface ImageZoomerProps {
  imageSrc: string;
  imageAlt?: string;
}

const ImageZoomer = ({ imageSrc, imageAlt = "" }: ImageZoomerProps) => {
  const [hoveringOnImage, setHoveringOnImage] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const lens = lensRef.current;
    const result = resultRef.current;

    if (!container || !image || !lens || !result) {
      return; // Exit early if any ref is not yet attached
    }

    const imageRect = image.getBoundingClientRect();
    const lensRect = lens.getBoundingClientRect();
    const resultRect = result.getBoundingClientRect();

    result.style.backgroundImage = `url(${image.src})`;

    const zoomImage = (e: MouseEvent) => {
      const { x, y } = getMousePos(e, container);

      lens.style.left = `${x}px`;
      lens.style.top = `${y}px`;

      const fx = resultRect.width / lensRect.width;
      const fy = resultRect.height / lensRect.height;

      result.style.backgroundSize = `${imageRect.width * fx}px ${
        imageRect.height * fy
      }px`;
      result.style.backgroundPosition = `-${x * fx}px -${y * fy}px`;
    };

    const getMousePos = (e: MouseEvent, container: HTMLDivElement) => {
      const rect = container.getBoundingClientRect();
      let x = e.clientX - rect.left - lensRect.width / 2;
      let y = e.clientY - rect.top - lensRect.height / 2;

      const minX = 0;
      const minY = 0;
      const maxX = rect.width - lensRect.width;
      const maxY = rect.height - lensRect.height;

      x = Math.max(minX, Math.min(maxX, x));
      y = Math.max(minY, Math.min(maxY, y));

      return { x, y };
    };

    if (hoveringOnImage) {
      container.addEventListener("mousemove", zoomImage);
    } else {
      container.removeEventListener("mousemove", zoomImage);
    }

    return () => {
      container.removeEventListener("mousemove", zoomImage);
    };
  }, [hoveringOnImage]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHoveringOnImage(true)}
      onMouseLeave={() => setHoveringOnImage(false)}
      className="size-full relative"
    >
      <Image
        width={400}
        height={400}
        ref={imageRef}
        src={imageSrc}
        alt={imageAlt}
        className="size-full object-cover"
      />

      <div
        ref={lensRef}
        className={clsx(
          "absolute top-0 left-0",
          "size-24 border border-zinc-500 bg-black/60 pointer-events-none",
          hoveringOnImage ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        ref={resultRef}
        className={clsx(
          "absolute top-0 left-[calc(100%+20px)]",
          "size-72 bg-no-repeat pointer-events-none",
          hoveringOnImage ? "z-10 opacity-100" : "-z-20 opacity-0"
        )}
      />
    </div>
  );
};

export default ImageZoomer;
