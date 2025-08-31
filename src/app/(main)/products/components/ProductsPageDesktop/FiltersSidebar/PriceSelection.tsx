"use client";

import FilterSection from "./components/FilterSection";
import RangeSlider from "../../RangeSlider";

const PriceSelection = () => {
  const onRangeChange = (min: number, max: number) => {
    console.log(`Min value: ${min} , Max value: ${max}`);
  };

  return (
    <FilterSection title="Price">
      <RangeSlider
        defaultMin={30}
        defaultMax={1445}
        unit="₹"
        unitPosition="before"
        onRangeChange={onRangeChange}
      />
    </FilterSection>
  );
};

export default PriceSelection;
