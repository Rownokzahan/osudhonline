import BottomNavbar from "./BottomNavbar";
import TopBarMobile from "./TopBarMobile";

const NavbarMobile = () => {
  return (
    <div className="lg:hidden">
      <TopBarMobile />
      <BottomNavbar />
    </div>
  );
};

export default NavbarMobile;
