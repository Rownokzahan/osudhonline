"use client";

import { Id } from "@/types";
import clsx from "clsx";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

interface SaveButtonProps {
  productId: Id;
}

const SaveButton = ({}: SaveButtonProps) => {
  const isSaved = true;

  return (
    <button
      className={clsx("size-7 absolute top-0 right-0 grid place-items-center")}
    >
      {isSaved ? (
        <IoBookmark size={24} className="text-accent" />
      ) : (
        <IoBookmarkOutline size={24} className="text-dark-light" />
      )}
    </button>
  );
};

export default SaveButton;
