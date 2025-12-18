"use client";

import Link from "next/link";
import {
  FiCreditCard,
  FiBox,
  FiMapPin,
  FiBookmark,
  FiShield,
  FiInfo,
} from "react-icons/fi";
import SignOutButton from "./SignOutButton";

const menuItems = [
  { label: "My wallet", icon: FiCreditCard, href: "" },
  { label: "My orders", icon: FiBox, href: "" },
  { label: "My addresses", icon: FiMapPin, href: "" },
  { label: "Saved for later", icon: FiBookmark, href: "" },
  { label: "Legal Information", icon: FiShield, href: "/profile/legal-info" },
  { label: "About Us", icon: FiInfo, href: "/about-us" },
];

const AccountMenu = () => {
  return (
    <div className="px-6 py-4 border rounded-3xl">
      <ul className="divide-y font-medium">
        {menuItems.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <Link href={href} className="py-4 flex items-center gap-3">
              <Icon size={24} className="text-teal-500" />
              <span>{label}</span>
            </Link>
          </li>
        ))}

        {/* Sign out */}
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
};

export default AccountMenu;
