import Logo from "@/compoents/ui/Logo";
import { IoArrowForward } from "react-icons/io5";

const footerSections = [
  {
    title: "COMPANY",
    links: [
      { label: "About Netmeds", href: "#" },
      { label: "Career", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
  {
    title: "OUR POLICIES",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Fees & Payments Policy", href: "#" },
      { label: "Shipping & Delivery Policy", href: "#" },
      { label: "Return, Refund & Cancellation Policy", href: "#" },
      { label: "Editorial Policy", href: "#" },
      { label: "Caution Notice", href: "#" },
    ],
  },
  {
    title: "SHOPPING",
    links: [
      { label: "Medicines A To Z", href: "#" },
      { label: "Shop By Categories", href: "#" },
      { label: "Offers / Coupons", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
  {
    title: "SOCIAL",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Youtube", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="hidden lg:block  bg-light mt-12">
      <div className="ui-container py-10 flex justify-between gap-6 flex-wrap">
        {/* Map footer sections */}
        {footerSections.map((section) => (
          <div key={section.title} className="w-48 space-y-4">
            <h3 className="font-black">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="font-medium text-dark-light">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter section */}
        <div className="max-w-66 space-y-4">
          <h3 className="font-black">SUBSCRIBE TO OUR NEWSLETTER</h3>

          <p className="font-medium text-dark-light">
            Get a free subscription to our health and fitness tip and stay tuned
            to our latest offers
          </p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 border-b-2 border-dark-light  flex-1 bg-transparent outline-none font-bold"
            />
            <button className="size-11 rounded-lg bg-teal-200 grid place-items-center">
              <IoArrowForward size={22} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="ui-container border-t">
        <div className="py-6 flex items-center gap-1">
          <Logo />
          <p className="text-sm">
            #MadeInBangladesh © {new Date().getFullYear()} OsudhOnline
            Marketplace Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
