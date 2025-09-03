import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = () => {
  return (
    <ul className="ui-container py-6 font-medium text-sm flex items-center">
      <li className="text-secondary">
        <Link href={""}>Home</Link>
      </li>
      <span className="px-1 text-dark-light">
        <IoIosArrowForward />
      </span>
      <li className="text-secondary">
        <Link href={""}>Wellness</Link>
      </li>
      <span className="px-1 text-dark-light">
        <IoIosArrowForward />
      </span>
      <li className="max-w-36 truncate text-secondary">
        <Link href={""}>Sugar Substitutes (Fitness)</Link>
      </li>
      <span className="px-1 text-dark-light">
        <IoIosArrowForward />
      </span>
      <li className="max-w-36 truncate text-dark-light">
        <Link href={""}>Sugar Free Natura Powder 100 gm</Link>
      </li>
    </ul>
  );
};

export default Breadcrumb;
