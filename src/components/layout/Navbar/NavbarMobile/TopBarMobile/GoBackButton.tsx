"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

const GoBackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const goBack = () => {
    router.back(); // Goes back to previous page
  };

  return (
    <button onClick={goBack} className="-ms-2">
      <IoIosArrowBack size={28} className="text-dark/70" />
    </button>
  );
};

export default GoBackButton;
