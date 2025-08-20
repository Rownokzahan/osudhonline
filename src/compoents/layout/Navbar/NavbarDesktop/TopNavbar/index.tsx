import Logo from "@/compoents/ui/Logo";
import SearchBoxDesktop from "./SearchBoxDesktop";
import Link from "next/link";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { HiMiniUser } from "react-icons/hi2";

const TopNavbar = () => {
  return (
    <nav className="bg-primary text-secondary">
      <div className="h-18 ui-container py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1">
          <Logo />
          <span className="text-2xl font-semibold">osudhonline</span>
        </div>

        <div className="h-full flex items-center gap-6">
          <SearchBoxDesktop />

          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="p-2 rounded-full hover:bg-white/50 duration-100"
            >
              <PiShoppingCartSimpleFill size={24} />
            </Link>
            <Link
              href="/"
              className="px-4 py-2 rounded-full flex items-center gap-1 hover:bg-white/50 duration-100"
            >
              <HiMiniUser size={23} />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;