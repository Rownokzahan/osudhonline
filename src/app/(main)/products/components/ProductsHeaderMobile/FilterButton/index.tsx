"use client";

import { MdFilterList } from "react-icons/md";
import FilterModal from "./FilterModal";
import { useState } from "react";

const FilterButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-3 py-1 border rounded-full flex items-center gap-1"
      >
        <span className="text-secondary font-medium">Filter</span>
        <MdFilterList size={18} />
      </button>

      <FilterModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default FilterButton;
