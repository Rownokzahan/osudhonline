import BaseCarousel from "@/components/carousel/BaseCarousel";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    id: 1,
    name: "Himalaya",
    href: "",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711122523718.png",
  },
  {
    id: 2,
    name: "Baidyanath",
    href: "",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711122628382.png",
  },
  {
    id: 3,
    name: "Lakme",
    href: "",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711122642243.png",
  },
  {
    id: 4,
    name: "Horlicks",
    href: "",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1711122653173.png",
  },
  {
    id: 5,
    name: "Dabur",
    href: "",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1712131266864.png",
  },
];

const PopularBrands = () => {
  return (
    <BaseCarousel title="Popular Brands">
      {brands.map((brand) => {
        const { id, href, image, name } = brand || {};

        return (
          <div
            key={id}
            className={clsx(
              "pl-3 flex-none",
              "w-[23%] sm:w-[30%] lg:w-[20%]",
              "last:pr-3 last:w-[calc(23%+12px)] last:sm:w-[calc(30%+12px)] last:lg:pr-0 last:lg:w-[20%]"
            )}
          >
            <Link href={href} key={id}>
              <Image
                height={214}
                width={214}
                src={image}
                alt=""
                className="w-full aspect-square"
              />
              <p className="mt-2 text-center truncate text-xs md:text-base lg:text-lg font-medium">
                {name}
              </p>
            </Link>
          </div>
        );
      })}
    </BaseCarousel>
  );
};

export default PopularBrands;
