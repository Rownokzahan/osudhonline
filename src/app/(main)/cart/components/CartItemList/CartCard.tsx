"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const cartItem = {
  quantity: 1,
  product: {
    id: "5",
    name: "Dr. Reckeweg Vita-C Forte 10 ml Tonic 12's",
    price: "₹1,074.47",
    originalPrice: "₹1,390.00",
    discount: "23% OFF",
    image:
      "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:180/Gw2ozipTfF-dr_reckeweg_vita_c_forte_10_ml_tonic_12s_0_0.jpg",
  },
};

const CartCard = () => {
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

  const { product } = cartItem;
  const { image, name, price, originalPrice, discount } = product;

  return (
    <div className="py-3">
      <div className="grid grid-cols-[120px_1fr] gap-3">
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
