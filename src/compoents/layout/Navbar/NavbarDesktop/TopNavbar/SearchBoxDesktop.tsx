import { IoSearch } from "react-icons/io5";

const SearchBoxDesktop = () => {
  return (
    <div className="h-[calc(100%+3px)] px-4 py-2 rounded-full bg-white text-dark/70 flex items-center gap-2">
      <IoSearch />

      <input
        type="text"
        placeholder="Search for medicines, lab tests, doctors & beauty"
        className="outline-0 text-sm w-xs placeholder:text-dark/70"
      />
    </div>
  );
};

export default SearchBoxDesktop;
