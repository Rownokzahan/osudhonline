"use client";

import { CartItem } from "@/types";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

interface CartCardProps {
  cartItem: CartItem;
}

const CartCard = ({ cartItem }: CartCardProps) => {
  const { product } = cartItem || {};

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const quantityOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  const { image, name, price, originalPrice, discount } = product;

  return (
    <div className="px-4 lg:px-0 py-3">
      <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-3">
        <img src={image} alt="" />

        <div className="space-y-2">
          <p className="text-sm">{name}</p>

          <div className="flex gap-2">
            <h3 className="font-black">{price}</h3>

            <div className="flex gap-1 mt-[5px]">
              <p className="text-dark-light line-through text-xs">
                {originalPrice}
              </p>
              <p className="text-tertiary font-semibold text-xs">{discount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-secondary">
        <button type="button" className="text-xs font-semibold">
          Save for later
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            type="button"
            className="w-full px-3 py-1 border rounded-2xl flex items-center justify-between font-semibold"
          >
            <span className="w-12 text-sm block text-left">
              Qty: {quantity}
            </span>

            <IoChevronDownOutline
              className={clsx(dropdownOpen && "rotate-180")}
            />
          </button>

          {dropdownOpen && (
            <div
              className="w-full h-36 right-0 mt-2 border rounded-xl bg-white absolute z-20 overflow-y-auto divide-y text-sm"
              style={{ scrollbarWidth: "thin" }}
            >
              <button
                type="button"
                className="w-full h-8 grid place-items-center text-xs text-dark-light"
              >
                Remove Item
              </button>

              {quantityOptions.map((num) => (
                <button
                  onClick={() => {
                    setQuantity(num);
                    setDropdownOpen(false);
                  }}
                  key={num}
                  type="button"
                  className={clsx(
                    "w-full h-8 grid place-items-center text-center"
                  )}
                >
                  {num}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
