import Link from "next/link";

interface Group {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const groups: Group[] = [
  {
    title: "Company",
    links: [
      { label: "About Netmeds", href: "about-us" },
      { label: "Career", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
  {
    title: "Our Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Return Policy", href: "/return-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Fees & Payments", href: "/fees-payments" },
      { label: "Shipping & Delivery", href: "/shipping-delivery" },
    ],
  },
  {
    title: "Shopping",
    links: [
      { label: "Medicines A To Z", href: "all-medicines" },
      { label: "Shop By Categories", href: "all-categories" },
      { label: "Offers / Coupons", href: "#" },
      { label: "FAQs", href: "all-faqs" },
    ],
  },
];

const SiteLinks = () => {
  return (
    <>
      {groups.map(({ title, links }) => (
        <div key={title} className="w-48 space-y-4">
          <h3 className="font-black uppercase">{title}</h3>

          <ul className="font-medium text-dark-light space-y-2">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default SiteLinks;
