"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface AddToCartButtonProps {
  productId: string;
}

const AddToCartButton = ({}: AddToCartButtonProps) => {
  const [quantity, setQuantity] = useState(0);

  if (quantity > 0) {
    return (
      <div className="w-23 h-8 rounded-full bg-primary/15 flex items-center justify-between">
        <button
          onClick={() => setQuantity((prev) => prev - 1)}
          className="size-8 rounded-full bg-primary text-dark-primary grid place-items-center"
        >
          <FiMinus />
        </button>

        <span className="font-medium">{quantity}</span>

        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="size-8 rounded-full bg-primary text-dark-primary grid place-items-center"
        >
          <FiPlus />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setQuantity(1)}
      className="w-23 h-8 rounded-full bg-primary text-dark-primary flex items-center justify-center gap-2"
    >
      <span className="font-bold">Add</span>
      <FiPlus />
    </button>
  );
};

export default AddToCartButton;
