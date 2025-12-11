import SocialLinks from "./SocialLinks";
import FooterBottom from "./FooterBottom";
import Newsletter from "./Newsletter";
import SiteLinks from "./SiteLinks";

const Footer = () => {
  return (
    <footer className="hidden lg:block  bg-light mt-12">
      <div className="ui-container py-10 flex justify-between gap-6 flex-wrap">
        <SiteLinks />
        <SocialLinks />
        <Newsletter />
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
