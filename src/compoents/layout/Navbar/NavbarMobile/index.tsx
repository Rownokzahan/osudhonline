import BottomNavbar from "./BottomNavbar";
import SearchBar from "./SearchBar";

const NavbarMobile = () => {
  return (
    <div className="lg:hidden">
      <SearchBar />
      <BottomNavbar />
    </div>
  );
};

export default NavbarMobile;
