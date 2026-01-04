"use client";

import { useEffect, useState } from "react";
import AddAddressDrawer from "./AddAddressButton/AddAddressDrawer";

const AddAddressButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // cleanup — critical
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger */}
      <div className="my-6">
        <button
          onClick={() => setIsOpen(true)}
          className="block mx-auto sm:w-5/12 py-3 px-6 border rounded-3xl font-bold bg-gray-100 text-secondary hover:text-dark-primary"
        >
          Add new address
        </button>
      </div>

      <AddAddressDrawer isOpen={isOpen} closeDrawer={() => setIsOpen(false)} />
    </>
  );
};

export default AddAddressButton;
