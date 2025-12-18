import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const links = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Return Policy",
    href: "/return-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms",
  },
  {
    label: "Fees & Payments",
    href: "/fees-payments",
  },
  {
    label: "Shipping & Delivery",
    href: "/shipping-delivery",
  },
];

const LegalInfoPage = () => {
  return (
    <>
      <header className="">
        <h1 className="text-2xl font-black">Legal Information</h1>
      </header>

      <ul className="my-6 space-y-2 text-dark-light font-bold">
        {links.map((link, index) => {
          const { href, label } = link || {};

          return (
            <li key={index} className="border-b">
              <Link
                href={href}
                className="h-12 flex justify-between items-center"
              >
                <span>{label}</span>

                <IoIosArrowForward className="text-dark-primary" />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LegalInfoPage;
