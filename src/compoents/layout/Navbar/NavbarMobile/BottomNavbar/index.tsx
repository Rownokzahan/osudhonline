import { GiMedicalPack } from "react-icons/gi";
import { HiBeaker, HiUser } from "react-icons/hi2";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";

const navItems = [
  {
    label: "Home",
    Icon: GiMedicalPack,
  },
  {
    label: "Category",
    Icon: TfiMenuAlt,
  },
  {
    label: "Account",
    Icon: HiUser,
  },
  {
    label: "Lab Tests",
    Icon: HiBeaker,
  },
  {
    label: "Cart",
    Icon: PiShoppingCartSimpleFill,
  },
];

const BottomNavbar = () => {
  return (
    <nav className="h-17 w-full px-4 shadow shadow-dark fixed bottom-0 flex items-center justify-between text-dark-light">
      {navItems.map(({ Icon, label }, index) => (
        <div key={index} className="text-center flex flex-col gap-1 items-center">
          <Icon size={23} />
          <span className="text-xs">{label}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNavbar;
