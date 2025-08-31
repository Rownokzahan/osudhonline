import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import PriceSelection from "../../shared/PriceSelection";
import CategorySelection from "../../shared/CategorySelection";
import BrandSelection from "../../shared/BrandSelection";
import DiscountSelection from "../../shared/DiscountSelection";

interface FilterModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const filters = ["Category", "Brands", "Price", "Discount"];

const FilterModal = ({ isModalOpen, closeModal }: FilterModalProps) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed z-50 inset-0 bg-white">
      <div className="h-16 px-6 bg-primary flex items-center justify-between">
        <h3 className="text-lg font-semibold text-dark-primary">Filter</h3>

        <button
          onClick={closeModal}
          className="size-12 text-white grid place-items-center"
        >
          <IoMdClose size={26} />
        </button>
      </div>

      <div className="h-[calc(100%-140px)] flex">
        <ul className="h-full w-[40%] bg-gray-100 text-sm text-dark/80">
          {filters.map((filter) => (
            <li
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={clsx(
                "p-4",
                selectedFilter == filter && "bg-white text-dark"
              )}
            >
              {filter}
            </li>
          ))}
        </ul>

        <div className="flex-1 p-6">
          {selectedFilter === "Category" && <CategorySelection />}
          {selectedFilter === "Brands" && <BrandSelection />}
          {selectedFilter === "Price" && <PriceSelection />}
          {selectedFilter === "Discount" && <DiscountSelection />}
        </div>
      </div>

      <div className="h-19 px-8 border-t flex justify-between items-center">
        <button className="w-[45%] py-3 border rounded-full text-secondary font-bold">
          Clear all
        </button>
        <button className="w-[45%] py-3 border rounded-full bg-primary text-dark-primary font-bold">
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
