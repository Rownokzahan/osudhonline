import BrandSelection from "../../shared/BrandSelection";
import PriceSelection from "../../shared/PriceSelection";
import CategorySelection from "../../shared/CategorySelection";
import FilterSection from "./FilterSection";
import DiscountSelection from "../../shared/DiscountSelection";

const FiltersSidebar = () => {
  return (
    <aside className="h-max p-4 pt-2 border rounded-2xl">
      <h3 className="py-2 text-2xl font-black">Filters</h3>

      <div className="divide-y">
        <FilterSection title="Category">
          <CategorySelection />
        </FilterSection>

        <FilterSection title="Brands">
          <BrandSelection />
        </FilterSection>

        <FilterSection title="Price">
          <PriceSelection />
        </FilterSection>

        <FilterSection title="Discount">
          <DiscountSelection />
        </FilterSection>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
