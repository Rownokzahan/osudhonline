"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface NavItemProps {
  label: string;
  href: string;
  Icon: IconType;
  badge?: number;
}

const NavItem = ({ label, href, Icon, badge }: NavItemProps) => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isActive = pathname === href;

  return (
    <Link
      key={label}
      href={href}
      className={clsx(
        "text-center flex flex-col gap-1 items-center",
        badge && "relative"
      )}
    >
      <Icon
        size={23}
        className={clsx(
          { "text-success": isActive && isHome },
          { "text-accent": isActive && !isHome }
        )}
      />

      <span>{label}</span>

      {Number(badge) > 0 && (
        <span
          className={clsx(
            "size-5 rounded-full bg-tertiary grid place-items-center",
            "text-light font-semibold text-xs",
            "absolute -top-2 -right-2"
          )}
        >
          {badge}
        </span>
      )}
    </Link>
  );
};

export default NavItem;
