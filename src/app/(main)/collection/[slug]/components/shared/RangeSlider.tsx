"use client";

import clsx from "clsx";
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
    setMinValue(Math.min(Number(event.target.value), maxValue));
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Math.max(Number(event.target.value), minValue));
  };

  // Commit final value
  const handleCommit = () => {
    onRangeChange(minValue, maxValue);
  };

  // Compute progress bar
  const getProgress = () => {
    const range = defaultMax - defaultMin;

    if (range === 0) {
      return { progressLeft: 0, progressWidth: 100 };
    }

    return {
      progressLeft: ((minValue - defaultMin) / range) * 100,
      progressWidth: ((maxValue - minValue) / range) * 100,
    };
  };

  const { progressLeft, progressWidth } = getProgress();

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

        {/* Min Slider */}
        <input
          type="range"
          min={defaultMin}
          max={defaultMax}
          value={minValue}
          onChange={handleMinChange}
          onMouseUp={handleCommit}
          onTouchEnd={handleCommit}
          className={clsx("rangeSlider", defaultMax - minValue < 2 && "z-10")} // Ensure min thumb stays selectable when both thumbs meet at the end
        />

        {/* Max Slider */}
        <input
          type="range"
          min={defaultMin}
          max={defaultMax}
          value={maxValue}
          onChange={handleMaxChange}
          onMouseUp={handleCommit}
          onTouchEnd={handleCommit}
          className={clsx(
            "rangeSlider",
            defaultMax === defaultMin && "scale-x-[-1]",
          )}
        />
      </div>
    </>
  );
};;

export default RangeSlider;
