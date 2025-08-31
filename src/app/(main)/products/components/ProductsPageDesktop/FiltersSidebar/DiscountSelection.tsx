"use client";

import FilterSection from "./components/FilterSection";
import RangeSlider from "../../RangeSlider";

const DiscountSelection = () => {
  const onRangeChange = (min: number, max: number) => {
    console.log(`Min value: ${min} , Max value: ${max}`);
  };

  return (
    <FilterSection title="Discount">
      <RangeSlider
        defaultMin={0}
        defaultMax={37}
        unit="%"
        onRangeChange={onRangeChange}
      />
    </FilterSection>
  );
};

export default DiscountSelection;
