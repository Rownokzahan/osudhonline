import BaseCarousel from "@/compoents/carousel/BaseCarousel";
import BaseCarouselItem from "@/compoents/carousel/BaseCarousel/BaseCarouselItem";

const sliderImages = [
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1737548272526.jpeg",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1729834706733.png",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1729834753447.png",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1729834825584.png",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1729834885507.png",
  "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/original/theme-image-1729834790466.png",
];

const SpecializedStores = () => {
  return (
    <BaseCarousel title="Specialized Stores">
      {sliderImages.map((image, index) => (
        <BaseCarouselItem
          key={index}
          href=""
          imgSrc={image}
          imgAlt={`Specialized Store ${index + 1}`}
        />
      ))}
    </BaseCarousel>
  );
};

export default SpecializedStores;
