"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const medicalConditions: Record<string, string[]> = {
  A: [
    "Acne",
    "Adhd",
    "Alcohol Addiction",
    "Allergies",
    "Alzheimer",
    "Amoebiasis",
    "Anaemia",
    "Anaesthesia General",
    "Anaesthesia Local",
    "Anal Fissure",
    "Angina",
    "Anti Scar",
    "Anxiety",
    "Apnea",
    "Appetite",
    "Arrhythmias",
    "Arthritis",
    "Asthma Copd",
    "Atopic Dermatitis Eczema",
    "Auto Immune Disease",
    "Ayurvedic Medicine",
  ],

  B: [
    "Bacterial Infections",
    "Bladder And Prostate Disorders",
    "Bleeding Disorders",
    "Blood Clot",
    "Bone Metabolism",
    "Burns",
  ],

  C: [
    "Cancer Oncology",
    "Cholelithiasis Gall Stones",
    "Cleanser",
    "Constipation",
    "Contraception",
    "Cough And Cold",
  ],

  D: [
    "Dandruff",
    "Denture Adhesive",
    "Depression",
    "Diabetes",
    "Diagnostic",
    "Diarrhoea",
    "Digestion",
    "Dry Eye",
    "Dry Skin",
  ],

  E: [
    "Ear Condition",
    "Epilepsy Convulsion",
    "Eye Conditions",
    "Eye Infections",
  ],

  F: ["Fever", "Fungal Infections"],

  G: ["Gastro Intestinal Motility Disorders", "General", "Glaucoma", "Gout"],

  H: [
    "H Pylori Infection",
    "Haematopoiesis",
    "Haemorrhoid",
    "Hair Color",
    "Hair Loss",
    "Head Lice",
    "Heart Failure",
    "High Cholesterol",
    "Hirsutism",
    "Hormonal Therapy",
    "Hyperpigmentation",
    "Hypertension",
    "Hyperthyroidism",
    "Hypnosis",
    "Hyponatremia",
    "Hypotension",
    "Hypothyroidism",
  ],

  I: [
    "Idiopathic Pulmonary Fibrosis",
    "Immune Suppression",
    "Immunoglobulins",
    "Impotence Erectile Dysfunction",
    "Intermittent Claudication",
    "Iron Supplement Anaemia",
    "Itching Dry Skin",
  ],

  K: ["Kidney Disease Stones"],

  L: ["Leprosy", "Liver Disease"],

  M: [
    "Malarial",
    "Melasma",
    "Migraine",
    "Multiple Sclerosis",
    "Muscle Cramps Spasticity",
    "Muscle Spasm",
    "Myasthenia Gravis",
    "Mydriasis",
  ],

  N: [
    "Nappy Rash",
    "Nasal Congestion",
    "Neuropathic Pain",
    "Nootropics And Neurotropics",
  ],

  O: ["Obesity", "Oral Care", "Osteoporosis"],

  P: [
    "Pain Relief",
    "Parasitic Worms",
    "Parkinsonism",
    "Peripheral Hypertension",
    "Peripheral Vascular Disease",
    "Poisoning Overdose",
    "Polycystic Ovary Syndrome",
    "Pregnancy Testing",
    "Premature Ejaculation",
    "Psoriasis",
    "Psoriasis Seborrhea Ichthyosis",
    "Psychosis",
  ],

  R: ["Rheumatoid Arthritis"],

  S: [
    "Scabies",
    "Scar",
    "Schizophrenia",
    "Skin Infections",
    "Smoking Cessation",
    "Stretch Marks",
    "Sun Protectors",
    "Sunscreen Preparations",
    "Supplements",
    "Surgicals",
  ],

  T: ["Thrombotic Disorder", "Tuberculosis"],

  U: [
    "Ulcer Reflux Flatulence",
    "Ulcerative Colitis Bowel Inflammatory Disease",
    "Urinary Retention",
    "Uterus Conditions",
    "Uti Infections",
  ],

  V: [
    "Vaccines",
    "Vaginal Conditions",
    "Varicose Veins",
    "Vertigo",
    "Viral Infections",
    "Vitiligo",
    "Vomitting Emesis",
  ],

  W: ["Warts Calluses Other Skin Lesion", "Wound Care", "Wrinkle Anti Ageing"],
};

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
];

const AllMedicinesPage = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const getConditionsToDisplay = (): Record<string, string[]> => {
    if (activeTab === "All") {
      return medicalConditions;
    }

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
      <div className="column-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8">
        {Object.entries(conditionsToDisplay).map(([category, conditions]) => (
          <div key={category} className="mb-8 space-y-4">
            <h2 className="pb-2 border-b-2 text-xl font-bold">{category}</h2>

            <ul className="ps-4 space-y-4">
              {conditions.map((condition, index) => (
                <li key={`${category}-${index}`}>
                  <Link
                    href="#"
                    className="w-full text-left py-2 text-dark-light"
                  >
                    {condition}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <span className="text-gray-600">or </span>
        <button className="text-green-600 hover:text-green-700 font-medium underline">
          View All Medicines
        </button>
      </div>
    </div>
  );
};

export default AllMedicinesPage;
