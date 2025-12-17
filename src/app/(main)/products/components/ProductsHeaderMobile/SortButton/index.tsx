"use client";

import { useState } from "react";
import { BiSortAlt2 } from "react-icons/bi";
import SortModal from "./SortModal";

const SortButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-3 py-1 border rounded-full flex items-center gap-1"
      >
        <span className="text-secondary font-medium">Sort</span>
        <BiSortAlt2 size={18} />
      </button>

      <SortModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default SortButton;
