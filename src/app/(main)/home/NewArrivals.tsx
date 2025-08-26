import BaseCarousel from "@/compoents/carousel/BaseCarousel";
import clsx from "clsx";
import Image from "next/image";

const sliderImages = [
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1756117616260.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1756117645714.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1756117656922.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1756117708531.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1756117746165.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1756117763860.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1756117791092.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1756117813883.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1756117834460.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1756117853141.jpeg",
];

const NewArrivals = () => {
  return (
    <BaseCarousel title="New Arrivals">
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className={clsx(
            "min-w-0 pl-3",
            "flex-[0_0_40%] lg:flex-[0_0_20%]",
            "last:flex-[0_0_calc(40%+12px)] last:pr-3 lg:last:flex-[0_0_20%] lg:last:pr-0"
          )}
        >
          <Image
            width={256}
            height={320}
            src={image}
            alt={`New Arrival ${index + 1}`}
            className="w-full aspect-4/5 rounded-2xl object-cover"
          />
        </div>
      ))}
    </BaseCarousel>
  );
};

export default NewArrivals;
