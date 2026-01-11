"use client";

import { useState } from "react";
import SortOptionsList, {
  SortOption,
  sortOptions,
} from "../shared/SortOptionsList";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SortDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption>(sortOptions[0]);

  const handleSelect = (option: SortOption) => {
    setSelected(option);
    setOpen(false); // close dropdown after selecting
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-63 px-4 py-2 border rounded-2xl text-sm flex items-center justify-between"
      >
        <span className="flex items-center gap-1">
          <span className="font-medium">Sort by:</span>
          <span className="font-semibold">{selected.label}</span>
        </span>

        <span className="text-secondary">
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </button>

      {open && (
        <div className="w-full mt-3 rounded-2xl shadow-lg bg-white absolute z-10">
          <SortOptionsList selectedSort={selected} onSelect={handleSelect} />
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
