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
            "min-w-0 pl-3",
            "flex-[0_0_calc(100%-12px)] lg:flex-[0_0_50%]",
            "last:flex-[0_0_100%] last:pr-3 lg:last:flex-[0_0_50%] lg:last:pr-0"
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
