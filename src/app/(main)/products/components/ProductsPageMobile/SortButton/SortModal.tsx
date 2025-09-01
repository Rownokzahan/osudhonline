"use client";

import { useState } from "react";
import SortOptionsList, {
  SortOption,
  sortOptions,
} from "../../shared/SortOptionsList";
import { IoMdClose } from "react-icons/io";

interface SortModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const SortModal = ({ isModalOpen, closeModal }: SortModalProps) => {
  const [selected, setSelected] = useState<SortOption>(sortOptions[0]);

  const handleSelect = (option: SortOption) => {
    setSelected(option);
    closeModal(); // close modal
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed z-50 inset-0">
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-dark/70 backdrop-blur-xs"
      />

      <div className="w-full rounded-t-3xl shadow-lg bg-white absolute bottom-0">
        <div className="px-6 pt-6 flex justify-between items-center">
          <h3 className="font-semibold">Sort By</h3>

          <button onClick={closeModal}>
            <IoMdClose size={26} />
          </button>
        </div>

        <SortOptionsList selectedSort={selected} onSelect={handleSelect} />
      </div>
    </div>
  );
};

export default SortModal;
