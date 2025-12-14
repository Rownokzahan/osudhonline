import clsx from "clsx";
import { FaAngleRight } from "react-icons/fa6";

interface FAQSidebarProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const FAQSidebar = ({
  categories,
  activeCategory,
  onSelectCategory,
}: FAQSidebarProps) => (
  <aside
    className={clsx(
      "hidden md:block border rounded-3xl sticky lg:top-36 md:top-20",
      "max-h-[calc(100dvh-162px)] h-max overflow-y-auto"
    )}
  >
    <ul className="py-2 px-1 divide-y">
      {categories.map((category) => (
        <li key={category} className="h-15 px-3 flex items-center">
          <button
            onClick={() => onSelectCategory(category)}
            className="w-full flex items-center justify-between"
          >
            <span
              className={clsx(
                "text-left",
                activeCategory === category
                  ? "font-bold text-dark"
                  : "font-medium text-dark-light"
              )}
            >
              {category}
            </span>
            <FaAngleRight
              className={clsx(
                activeCategory === category ? "text-accent" : "text-dark-light"
              )}
            />
          </button>
        </li>
      ))}
    </ul>
  </aside>
);

export default FAQSidebar;
