"use client";

import RangeSlider from "./RangeSlider";

const DiscountSelection = () => {
  const onRangeChange = (min: number, max: number) => {
    console.log(`Min value: ${min} , Max value: ${max}`);
  };

  return (
    <>
      <RangeSlider
        defaultMin={0}
        defaultMax={37}
        unit="%"
        onRangeChange={onRangeChange}
      />
    </>
  );
};

export default DiscountSelection;
