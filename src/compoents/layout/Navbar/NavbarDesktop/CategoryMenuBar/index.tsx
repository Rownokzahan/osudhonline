import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    label: "All Categories",
    image: "/images/categories/all-categories.avif",
    href: "",
    submenu: [],
  },
  {
    label: "Medicine",
    image: "/images/categories/medicine.avif",
    href: "",
    submenu: [
      { label: "All Medicines", href: "/all-medicines" },
      { label: "Order Online", href: "" },
    ],
  },
  {
    label: "Lab Tests",
    image: "/images/categories/lab-tests.avif",
    href: "",
    submenu: [],
  },
  {
    label: "Beauty",
    image: "/images/categories/beauty.avif",
    href: "",
    submenu: [
      { label: "Fragrances", href: "" },
      { label: "Hair", href: "" },
      { label: "Men's Grooming", href: "" },
      { label: "Make-Up", href: "" },
      { label: "Mom & Baby", href: "" },
      { label: "Personal Care", href: "" },
      { label: "Skin Care", href: "" },
      { label: "Tools & Appliances", href: "" },
    ],
  },
  {
    label: "Wellness",
    image: "/images/categories/wellness.avif",
    href: "",
    submenu: [
      { label: "Ayush", href: "" },
      { label: "Fitness", href: "" },
      { label: "Personal Care", href: "" },
      { label: "Sexual Wellness", href: "" },
      { label: "Mom & Baby", href: "" },
      { label: "Diabetes Support", href: "" },
      { label: "Devices", href: "" },
      { label: "Surgical", href: "" },
      { label: "Treatments", href: "" },
      { label: "Eyewear", href: "" },
      { label: "Veterinary", href: "" },
    ],
  },
  {
    label: "Health Corner",
    image: "/images/categories/health-corner.avif",
    href: "",
    submenu: [
      { label: "Health Library", href: "" },
      { label: "All About Cancers", href: "" },
      { label: "Corona Awareness", href: "" },
      { label: "Selfcare Tools", href: "" },
    ],
  },
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
      <div className="h-12 ui-container flex items-center justify-between gap-6">
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
