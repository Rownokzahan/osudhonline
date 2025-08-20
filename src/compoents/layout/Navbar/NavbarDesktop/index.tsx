import CategoryMenuBar from "./CategoryMenuBar";
import TopNavbar from "./TopNavbar";

const NavbarDesktop = () => {
  return (
    <header className="hidden lg:block fixed top-0 w-full z-40">
      <TopNavbar />
      <CategoryMenuBar />
    </header>
  );
};

export default NavbarDesktop;
