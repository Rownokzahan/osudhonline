"use client";

import clsx from "clsx";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { RiRadioButtonFill } from "react-icons/ri";

const SortButton = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Popularity");

  const options = [
    "Popularity",
    "Price: High to Low",
    "Price: Low to High",
    "Discount: High to Low",
    "Discount: Low to High",
  ];

  const handleSelect = (option: string) => {
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
          <span className="font-semibold">{selected}</span>
        </span>

        <span className="text-secondary">
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </button>

      {open && (
        <ul className="w-full mt-3 py-3 rounded-2xl shadow-lg bg-white absolute z-10">
          {options.map((option) => (
            <li key={option}>
              <button
                onClick={() => handleSelect(option)}
                className="w-full ps-6 pe-4 py-2 flex items-center gap-3 text-dark-light"
              >
                {selected === option ? (
                  <RiRadioButtonFill size={22} className="text-primary" />
                ) : (
                  <IoRadioButtonOffSharp size={20} />
                )}
                <span className={clsx(selected === option && "text-dark font-bold")}>
                  {option}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortButton;
