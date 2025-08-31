import { IoMdSearch } from "react-icons/io";
import FilterOption from "./components/FilterOption";
import FilterSection from "./components/FilterSection";

const BrandSelection = () => {
  return (
    <FilterSection title="Brands">
      <div className="mb-2">
        <div className="px-2 rounded-full bg-light flex">
          <div className="size-9 grid place-items-center text-dark-light/70">
            <IoMdSearch size={20} />
          </div>

          <input
            type="text"
            placeholder={"Search Brands"}
            className="w-full outline-0 placeholder:font-medium"
          />
        </div>
      </div>

      <FilterOption label="Dr. Morepen" />
      <FilterOption label="Equal" />
      <FilterOption label="Kaloree" />
    </FilterSection>
  );
};

export default BrandSelection;
