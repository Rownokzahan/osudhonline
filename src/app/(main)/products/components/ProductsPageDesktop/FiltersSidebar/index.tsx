import BrandSelection from "./BrandSelection";
import CategorySelection from "./CategorySelection";
import DiscountSelection from "./DiscountSelection";
import PriceSelection from "./PriceSelection";

const FiltersSidebar = () => {
  return (
    <aside className="h-max p-4 pt-2 border rounded-2xl">
      <h3 className="py-2 text-2xl font-black">Filters</h3>

      <div className="divide-y">
        <CategorySelection />
        <BrandSelection />
        <PriceSelection />
        <DiscountSelection />
      </div>
    </aside>
  );
};

export default FiltersSidebar;
