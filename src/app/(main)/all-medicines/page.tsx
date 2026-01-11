"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { medicalConditions, MedicalConditionsMap } from "./data";

const alphabetTabs = [
  "All",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
] as const;

type AlphabetTab = (typeof alphabetTabs)[number];

const AllMedicinesPage = () => {
  const [activeTab, setActiveTab] = useState<AlphabetTab>("All");

  const getConditionsToDisplay = (): MedicalConditionsMap => {
    if (activeTab === "All") return medicalConditions;
    if (medicalConditions[activeTab]) {
      return { [activeTab]: medicalConditions[activeTab] };
    }
    return {};
  };

  const conditionsToDisplay = getConditionsToDisplay();

  return (
    <div className="ui-container">
      <h1 className="my-6 text-2xl font-bold">Find Your Medicines</h1>

      {/* Alphabet Navigation */}
      <div className="flex flex-wrap gap-3 mb-8 pb-4">
        {alphabetTabs.map((letter) => (
          <button
            key={letter}
            onClick={() => setActiveTab(letter)}
            className={clsx(
              "shrink-0 size-11 border rounded bg-dark-light/5",
              activeTab === letter ? "font-bold text-accent" : "font-medium"
            )}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Medical Conditions Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8">
        {Object.entries(conditionsToDisplay).map(([category, conditions]) => (
          <div key={category} className="mb-8 space-y-4 break-inside-avoid">
            <h2 className="pb-2 border-b-2 text-xl font-bold">{category}</h2>

            <ul className="ps-4 space-y-4">
              {conditions.map((condition) => (
                <li key={condition.id}>
                  <Link
                    href={`/collection/${condition.slug}`}
                    className="w-full text-left py-2 text-dark-light"
                  >
                    {condition.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {activeTab !== "All" && (
        <div className="mt-12 text-center">
          <span className="text-gray-600">or </span>
          <button
            onClick={() => setActiveTab("All")}
            className="text-green-600 hover:text-green-700 font-medium underline"
          >
            View All Medicines
          </button>
        </div>
      )}
    </div>
  );
};

export default AllMedicinesPage;
