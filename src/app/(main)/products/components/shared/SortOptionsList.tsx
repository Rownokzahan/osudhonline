import clsx from "clsx";
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { RiRadioButtonFill } from "react-icons/ri";

export interface SortOption {
  key: string;
  label: string;
}

export const sortOptions = [
  { key: "popularity", label: "Popularity" },
  { key: "price_desc", label: "Price: High to Low" },
  { key: "price_asc", label: "Price: Low to High" },
  { key: "discount_desc", label: "Discount: High to Low" },
  { key: "discount_asc", label: "Discount: Low to High" },
];

interface SortOptionsListProps {
  selectedSort: SortOption;
  onSelect: (key: SortOption) => void;
}

const SortOptionsList = ({ selectedSort, onSelect }: SortOptionsListProps) => {
  return (
    <ul className="py-4">
      {sortOptions.map((option) => {
        const isSelected = selectedSort.key === option.key;

        return (
          <li key={option.key}>
            <button
              onClick={() => onSelect(option)}
              className="w-full ps-6 pe-4 py-2 flex items-center gap-3 text-dark-light"
            >
              {isSelected ? (
                <RiRadioButtonFill size={22} className="text-primary" />
              ) : (
                <IoRadioButtonOffSharp size={20} />
              )}

              <span className={clsx(isSelected && "text-dark font-bold")}>
                {option.label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SortOptionsList;
