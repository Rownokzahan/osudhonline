import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import AllCategories from "./components/AllCategories";
import PopularBrands from "./components/PopularBrands";

const AllCategoriesPage = () => {
  return (
    <>
      <ul className="ui-container mt-3 mb-5 flex items-center gap-1 text-sm font-medium text-dark-light">
        <li>
          <Link href="/" className="flex items-center h-6 text-secondary">
            Home
          </Link>
        </li>

        <li className="flex items-center">
          <IoIosArrowForward size={18} />
        </li>

        <li>
          <Link href="/all-categories" className="flex items-center h-6">
            All Categories
          </Link>
        </li>
      </ul>

      <AllCategories />
      <PopularBrands />
    </>
  );
};

export default AllCategoriesPage;
