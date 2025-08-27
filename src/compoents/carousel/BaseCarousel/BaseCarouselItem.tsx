import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface BaseCarouselItemProps {
  imgSrc: string;
  imgAlt: string;
  href: string;
}

const BaseCarouselItem = ({ href, imgSrc, imgAlt }: BaseCarouselItemProps) => {
  return (
    <div
      className={clsx(
        "pl-3 flex-none",
        "w-[40%] sm:w-[30%] lg:w-[20%]",
        "last:pr-3 last:w-[calc(40%+12px)] last:sm:w-[calc(30%+12px)] last:lg:pr-0 last:lg:w-[20%]"
      )}
    >
      <Link href={href} className="w-full">
        <Image
          width={256}
          height={320}
          src={imgSrc}
          alt={imgAlt}
          className="w-full aspect-4/5 rounded-2xl object-cover"
        />
      </Link>
    </div>
  );
};

export default BaseCarouselItem;
