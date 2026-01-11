"use client";

import { useState } from "react";

const details = [
  { label: "Hsn Code", value: "0231016514H1" },
  { label: "Item Weight", value: "75g" },
  { label: "Country Of Origin", value: "India" },
  { label: "Name of Marketer", value: "Zydus Wellness Products Ltd." },
  { label: "Customer Care No.", value: "18001206868" },
  { label: "Manufacture Name", value: "Cadila Healthcare Ltd (Zydus)" },
  {
    label: "Address of Marketer",
    value:
      "House No. 6 & 7, Sigma Commerce Zone, Nr. Iskcon Temple, S. G. Highway, Ahmedabad-380015, Gujarat, India.",
  },
  {
    label: "Customer Care Email",
    value: "customercare@zyduswellness.com or customercare@zyduscadila.com",
  },
  {
    label: "Address of Manufacturer",
    value:
      "Zydus Wellness Products Ltd., Near Mamring Power House, Mamring, South Sikkim - 737132, India",
  },
];

const ProductDetails = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleDetails = expanded ? details : details.slice(0, 4);

  return (
    <div className="mt-6 px-4 lg:px-0 space-y-2 sm:space-y-3">
      <h3 className="sm:text-2xl font-black">Product details</h3>

      <ul className="ps-5 list-disc list-outside space-y-1 text-sm">
        {visibleDetails.map((item, index) => (
          <li key={index}>
            <span className="font-medium">{item.label}:</span> {item.value}
          </li>
        ))}

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-sm font-medium text-secondary"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </ul>
    </div>
  );
};

export default ProductDetails;
