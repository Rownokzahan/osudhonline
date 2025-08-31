"use client";

import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FilterSection = ({ title, children }: FilterSectionProps) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between"
      >
        <span className="my-1 py-2 font-black">{title}</span>

        <span className="text-secondary">
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </button>

      {open && <div>{children}</div>}
    </div>
  );
};

export default FilterSection;
