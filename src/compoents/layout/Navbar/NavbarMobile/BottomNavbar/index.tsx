import clsx from "clsx";
import Link from "next/link";
import { GiMedicalPack } from "react-icons/gi";
import { HiBeaker, HiUser } from "react-icons/hi2";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";

const BottomNavbar = () => {
  return (
    <nav
      className={clsx(
        "fixed z-40 bottom-0",
        "h-17 w-full px-4 shadow shadow-dark bg-white text-dark-light text-xs",
        "flex items-center justify-between"
      )}
    >
      <Link href={"/"} className="text-center flex flex-col gap-1 items-center">
        <GiMedicalPack size={23} className="text-success" />
        <span>Home</span>
      </Link>

      <Link
        href="/all-categories"
        className="text-center flex flex-col gap-1 items-center"
      >
        <TfiMenuAlt size={23} />
        <span>Category</span>
      </Link>

      <Link href={"/"} className="text-center flex flex-col gap-1 items-center">
        <HiUser size={23} />
        <span>Account</span>
      </Link>

      <Link href={"/"} className="text-center flex flex-col gap-1 items-center">
        <HiBeaker size={23} />
        <span>Lab Tests</span>
      </Link>

      <Link
        href={"/cart"}
        className="text-center flex flex-col gap-1 items-center relative"
      >
        <PiShoppingCartSimpleFill size={23} />
        <span>Cart</span>

        <span
          className={clsx(
            "size-5 rounded-full bg-tertiary grid place-items-center",
            "text-light font-semibold text-xs",
            "absolute -top-2 -right-2"
          )}
        >
          2
        </span>
      </Link>
    </nav>
  );
};

export default BottomNavbar;
