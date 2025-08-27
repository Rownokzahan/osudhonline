import BaseCarousel from "@/compoents/carousel/BaseCarousel";
import clsx from "clsx";
import Image from "next/image";

const sliderImages = [
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:640/theme-image-1750851318549.png?dpr=1",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:640/theme-image-1755307838926.png?dpr=1",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:640/theme-image-1754399106743.png?dpr=1",
];

const CashbackOffers = () => {
  return (
    <BaseCarousel>
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className={clsx(
            "pl-3 flex-none",
            "w-[90%] sm:w-[46%] lg:w-[50%]",
            "last:pr-3 last:w-[calc(90%+12px)] last:sm:w-[calc(46%+12px)] last:lg:pr-0 last:lg:w-[50%]"
          )}
        >
          <Image
            width={640}
            height={160}
            src={image}
            alt={`Cashback Offers ${index + 1}`}
            className="w-full aspect-4/1 rounded-2xl object-cover"
          />
        </div>
      ))}
    </BaseCarousel>
  );
};

export default CashbackOffers;
