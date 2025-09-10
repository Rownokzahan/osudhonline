"use client";

import clsx from "clsx";
import { faqData } from "./faqData";
import { FaAngleRight } from "react-icons/fa6";
import { useRef, useState } from "react";
import FAQAccordionItem from "./FAQAccordionItem";

const AllFAQsPage = () => {
  const [activeFAQItem, setActiveFAQItem] = useState("");
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (category: string) => {
    const section = sectionRefs.current[category];
    if (section) {
      setActiveCategory(category);

      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="ui-container">
      <h2 className="pt-6 text-2xl font-black">All FAQs</h2>

      <div className="py-6 flex gap-4">
        <ul className="w-[34%] h-max sticky top-36 py-2 px-1 border rounded-3xl divide-y">
          {faqData.map(({ category }) => (
            <li key={category} className="h-15 px-3 flex items-center">
              <button
                onClick={() => scrollToSection(category)}
                className="w-full flex items-center justify-between"
              >
                <span
                  className={clsx(
                    "text-left",
                    activeCategory === category
                      ? "font-bold text-dark"
                      : "font-medium text-dark-light"
                  )}
                >
                  {category}
                </span>
                <FaAngleRight
                  className={clsx(
                    activeCategory === category
                      ? "text-accent"
                      : "text-dark-light"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex-1 px-6 space-y-6">
          {faqData.map(({ category, faqs }) => (
            <div
              key={category}
              ref={(el) => {
                sectionRefs.current[category] = el;
              }}
              className="scroll-mt-36"
            >
              <h3 className="font-black">{category}</h3>

              <div>
                {faqs.map((faq, index) => {
                  const faqId = category + index;
                  return (
                    <FAQAccordionItem
                      key={faqId}
                      faq={faq}
                      isOpen={activeFAQItem === faqId}
                      onToggle={() =>
                        setActiveFAQItem((prev) =>
                          prev === faqId ? "" : faqId
                        )
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFAQsPage;
