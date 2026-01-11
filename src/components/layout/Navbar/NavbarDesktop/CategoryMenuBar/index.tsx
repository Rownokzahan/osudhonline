import Image from "next/image";
import Link from "next/link";

export type SubmenuItem = {
  label: string;
  href: string;
};

export type Category = {
  label: string;
  image: string;
  href: string;
  submenu: SubmenuItem[];
};

const categories: Category[] = [
  {
    label: "All Categories",
    image: "/images/categories/all-categories.avif",
    href: "/all-categories",
    submenu: [],
  },
  {
    label: "Medicine",
    image: "/images/categories/medicine.avif",
    href: "/all-medicines",
    submenu: [],
  },
  // {
  //   label: "Lab Tests",
  //   image: "/images/categories/lab-tests.avif",
  //   href: "",
  //   submenu: [],
  // },
  {
    label: "Beauty",
    image: "/images/categories/beauty.avif",
    href: "",
    submenu: [
      { label: "Fragrances", href: "/collection/slug" },
      { label: "Hair", href: "/collection/slug" },
      { label: "Men's Grooming", href: "/collection/slug" },
      { label: "Make-Up", href: "/collection/slug" },
      { label: "Mom & Baby", href: "/collection/slug" },
      { label: "Personal Care", href: "/collection/slug" },
      { label: "Skin Care", href: "/collection/slug" },
      { label: "Tools & Appliances", href: "/collection/slug" },
    ],
  },
  {
    label: "Wellness",
    image: "/images/categories/wellness.avif",
    href: "",
    submenu: [
      { label: "Ayush", href: "/collection/slug" },
      { label: "Fitness", href: "/collection/slug" },
      { label: "Personal Care", href: "/collection/slug" },
      { label: "Sexual Wellness", href: "/collection/slug" },
      { label: "Mom & Baby", href: "/collection/slug" },
      { label: "Diabetes Support", href: "/collection/slug" },
      { label: "Devices", href: "/collection/slug" },
      { label: "Surgical", href: "/collection/slug" },
      { label: "Treatments", href: "/collection/slug" },
      { label: "Eyewear", href: "/collection/slug" },
      { label: "Veterinary", href: "/collection/slug" },
    ],
  },
  // {
  //   label: "Health Corner",
  //   image: "/images/categories/health-corner.avif",
  //   href: "",
  //   submenu: [
  //     { label: "Health Library", href: "" },
  //     { label: "All About Cancers", href: "" },
  //     { label: "Corona Awareness", href: "" },
  //     { label: "Selfcare Tools", href: "" },
  //   ],
  // },
  {
    label: "Offers",
    image: "/images/categories/offers.avif",
    href: "",
    submenu: [],
  },
];

const CategoryMenuBar = () => {
  return (
    <div className="bg-secondary">
      <div className="h-12 ui-container flex items-center justify-between gap-16">
        {categories.map((cat) => (
          <div key={cat.label} className="h-full relative group/category">
            {/* Main category */}
            <div className="h-full flex items-center gap-2 text-white text-sm font-medium relative group/label">
              <Image
                src={cat.image}
                alt={cat.label}
                width={22}
                height={22}
                className="rounded-sm"
              />
              <Link href={cat.href}>{cat.label}</Link>
              <div className="absolute w-full h-1 bottom-0 bg-primary hidden group-hover/label:block" />
            </div>

            {/* Dropdown (if submenu exists) */}
            {cat.submenu.length > 0 && (
              <ul className="w-56 py-2 pe-2 rounded-b-2xl bg-light absolute top-full left-0 hidden group-hover/category:block shadow-sm">
                {cat.submenu.map((item) => (
                  <li
                    key={item.label}
                    className="px-4 py-2 rounded-e-2xl text-dark-light hover:bg-primary/10 hover:text-dark"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenuBar;
