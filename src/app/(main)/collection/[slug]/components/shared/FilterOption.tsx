"use client";

import clsx from "clsx";
import { useState } from "react";
import { IoCheckbox, IoSquareOutline } from "react-icons/io5";

type FilterOptionProps = {
  label: string;
  checked?: boolean;
  onClick?: () => void;
};

const FilterOption = ({ label }: FilterOptionProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <button
      onClick={() => setIsChecked((prev) => !prev)}
      className="w-full py-2 flex items-center gap-1"
    >
      <span>
        {isChecked ? (
          <IoCheckbox size={21} className="text-primary" />
        ) : (
          <IoSquareOutline size={21} className="text-dark-light/70" />
        )}
      </span>
      <span
        className={clsx("text-sm text-left", isChecked ? "text-dark" : "text-dark-light")}
      >
        {label}
      </span>
    </button>
  );
};

export default FilterOption;
