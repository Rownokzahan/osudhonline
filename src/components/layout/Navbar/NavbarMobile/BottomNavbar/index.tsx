"use client"

import clsx from "clsx";
import { BsCapsulePill } from "react-icons/bs";
import { GiMedicalPack } from "react-icons/gi";
import { HiUser } from "react-icons/hi2";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import NavItem from "./NavItem";

const BottomNavbar = () => {
  return (
    <nav
      className={clsx(
        "fixed z-40 bottom-0",
        "h-17 w-full px-4 shadow shadow-dark bg-white text-dark-light text-xs",
        "flex items-center justify-between"
      )}
    >
      <NavItem label="Home" href="/" Icon={GiMedicalPack} />
      <NavItem label="Category" href="/all-categories" Icon={TfiMenuAlt} />
      <NavItem label="Account" href="/" Icon={HiUser} />
      <NavItem label="Medicines" href="/all-medicines" Icon={BsCapsulePill} />

      <NavItem
        label="Cart"
        href="/cart"
        Icon={PiShoppingCartSimpleFill}
        badge={0}
      />
    </nav>
  );
};

export default BottomNavbar;
