import GoBackButton from "./GoBackButton";
import SearchBar from "./SearchBar";

const TopBarMobile = () => {
  return (
    <div className="h-16 w-full px-4 bg-primary fixed top-0 z-40 flex gap-2 items-center">
      <GoBackButton />
      <SearchBar />
    </div>
  );
};

export default TopBarMobile;
