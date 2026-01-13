"use client";

import { useState, useEffect, useRef } from "react";
import ProductsCarousel from "@/components/carousel/ProductsCarousel";
import { products } from "@/data/products";
import clsx from "clsx";
import { IoSearch } from "react-icons/io5";

const SearchBoxDesktop = () => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="h-[calc(100%+3px)] px-4 py-2 rounded-full bg-white text-dark/70 flex items-center gap-2">
        <IoSearch />
        <input
          type="text"
          placeholder="Search for medicines, lab tests, doctors & beauty"
          className="w-md outline-0 text-sm placeholder:text-dark/70"
          onFocus={() => setIsActive(true)}
        />
      </div>

      {isActive && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 top-18 z-50 bg-dark/50" />

          {/* Dropdown */}
          <div
            ref={dropdownRef}
            className={clsx(
              "w-[calc(100%+24px)] p-5 rounded-4xl bg-white",
              "absolute z-50 top-[calc(100%+12px)] -left-3"
            )}
          >
            <div className="max-h-[calc(100dvh-295px)] overflow-y-auto">
              {/* Recently Viewed */}
              <div className="flex items-center justify-between">
                <h3 className="font-black">Recently viewed products</h3>
                <button className="font-bold text-secondary text-sm">
                  Clear All
                </button>
              </div>
              <ProductsCarousel products={products} className="mt-2" />

              {/* Featured Products */}
              <h3 className="mt-6 font-black">Featured products</h3>
              <ProductsCarousel products={products} className="mt-2" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBoxDesktop;
