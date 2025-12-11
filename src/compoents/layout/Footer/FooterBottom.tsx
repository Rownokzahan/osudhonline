import Logo from "@/compoents/ui/Logo";

const FooterBottom = () => {
  return (
    <div className="ui-container border-t">
      <div className="py-6 flex items-center gap-1">
        <Logo />
        <p className="text-sm">
          #MadeInBangladesh © {new Date().getFullYear()} OsudhOnline Marketplace
          Ltd
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;