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
        <Link href={""}>Offers</Link>
      </li>
      <span className="px-1 text-dark-light">
        <IoIosArrowForward />
      </span>
      <li className="text-dark-light">
        <Link href={""}>Suger Substitutes</Link>
      </li>
    </ul>
  );
};

export default Breadcrumb;
