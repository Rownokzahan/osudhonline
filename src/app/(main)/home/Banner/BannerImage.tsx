const BannerImage = () => {
  return (
    <div className="py-3 lg:ui-container">
      <picture>
        {/* Large screens */}
        <source
          media="(min-width: 641px)"
          srcSet="https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:1280/theme-image-1755620131261.jpeg"
        />

        {/* Fallback image for mobile screens */}
        <img
          src="https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/nmz/company/2/applications/65f562c1504a59a67f529ad4/theme/pictures/free/resize-w:1280/theme-image-1755620260228.jpeg?dpr=1"
          alt=""
          className="lg:rounded-2xl w-full h-auto"
        />
      </picture>
    </div>
  );
};

export default BannerImage;
