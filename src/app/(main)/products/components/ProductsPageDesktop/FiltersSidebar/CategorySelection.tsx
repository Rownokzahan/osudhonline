import FilterOption from "./components/FilterOption";
import FilterSection from "./components/FilterSection";

const CategorySelection = () => {
  return (
    <FilterSection title="Category">
      <FilterOption label="Sugar Substitutes (Fitness)" />
      <FilterOption label="Protein Powders" />
      <FilterOption label="Vitamins" />
    </FilterSection>
  );
};

export default CategorySelection;
