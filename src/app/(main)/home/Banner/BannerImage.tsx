import Image from "next/image";

const BannerImage = () => {
  return (
    <div className="py-4 lg:ui-container">
      <picture className="">
        {/* Large screens */}
        <source
          media="(min-width: 769px)"
          srcSet="https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:1280/theme-image-1755620131261.jpeg"
        />

        {/* Mobile screens */}
        <source
          media="(max-width: 768px)"
          srcSet="https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:1280/theme-image-1755620260228.jpeg?dpr=1"
        />

        {/* Fallback image */}
        <div className="lg:rounded-2xl overflow-hidden">
          <Image
            src="https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:1280/theme-image-1755620131261.jpeg"
            alt={""}
            width={1280}
            height={600}
            priority
          />
        </div>
      </picture>
    </div>
  );
};

export default BannerImage;