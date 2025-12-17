"use client";

import { Id } from "@/types";
import clsx from "clsx";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface AddToCartButtonProps {
  productId: Id;
  className?: string;
}

const AddToCartButton = ({ className }: AddToCartButtonProps) => {
  const [quantity, setQuantity] = useState(0);

  const baseClass = clsx(
    "h-8 rounded-full flex items-center",
    className
  );

  const iconBtn =
    "h-full aspect-square rounded-full bg-primary text-dark-primary grid place-items-center";

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(0, prev - 1));

  if (quantity > 0) {
    return (
      <div className={clsx(baseClass, "bg-primary/15 justify-between")}>
        <button onClick={decrement} className={iconBtn}>
          <FiMinus />
        </button>

        <span className="font-medium">{quantity}</span>

        <button onClick={increment} className={iconBtn}>
          <FiPlus />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setQuantity(1)}
      className={clsx(
        baseClass,
        "bg-primary text-dark-primary justify-center gap-2"
      )}
    >
      <span className="font-bold">Add</span>
      <FiPlus />
    </button>
  );
};

export default AddToCartButton;
