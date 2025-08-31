"use client";

import { useState } from "react";

interface RangeSliderProps {
  defaultMin: number;
  defaultMax: number;
  unit: string;
  unitPosition?: "before" | "after";
  onRangeChange: (min: number, max: number) => void;
}

const RangeSlider = ({
  defaultMin,
  defaultMax,
  unit,
  unitPosition = "after",
  onRangeChange,
}: RangeSliderProps) => {
  const [minValue, setMinValue] = useState(defaultMin);
  const [maxValue, setMaxValue] = useState(defaultMax);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinValue(Math.min(Number(event.target.value), maxValue - 1));
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Math.max(Number(event.target.value), minValue + 1));
  };

  // Commit final value
  const handleCommit = () => {
    onRangeChange(minValue, maxValue);
  };

  const progressLeft =
    ((minValue - defaultMin) / (defaultMax - defaultMin)) * 100;
  const progressWidth =
    ((maxValue - minValue) / (defaultMax - defaultMin)) * 100;

  const formatValue = (value: number) => {
    return unitPosition === "before" ? `${unit}${value}` : `${value}${unit}`;
  };

  return (
    <>
      <p>
        {formatValue(minValue)} - {formatValue(maxValue)}
      </p>

      <div className="h-5 mt-2 mb-4 relative">
        {/* Track */}
        <div className="h-1 w-full rounded-full bg-gray-200 absolute top-1/2 -translate-y-1/2" />

        {/* Progress */}
        <div
          className="h-1 rounded-full bg-primary absolute top-1/2 -translate-y-1/2"
          style={{
            left: `${progressLeft}%`,
            width: `${progressWidth}%`,
          }}
        />

        {/* Sliders */}
        <input
          type="range"
          min={defaultMin}
          max={defaultMax}
          value={minValue}
          onChange={handleMinChange}
          onMouseUp={handleCommit}
          onTouchEnd={handleCommit}
          className="rangeSlider absolute w-full top-0 left-0 pointer-events-auto"
        />
        <input
          type="range"
          min={defaultMin}
          max={defaultMax}
          value={maxValue}
          onChange={handleMaxChange}
          onMouseUp={handleCommit}
          onTouchEnd={handleCommit}
          className="rangeSlider absolute w-full top-0 left-0 pointer-events-auto"
        />
      </div>
    </>
  );
};

export default RangeSlider;
