"use client";

import clsx from "clsx";
import { faqData } from "./faqData";
import { FaAngleRight } from "react-icons/fa6";
import { useRef, useState } from "react";
import FAQAccordionItem from "./FAQAccordionItem";

const AllFAQsPage = () => {
  const [activeFAQItem, setActiveFAQItem] = useState("");
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);

  // References for each FAQ category section for smooth scrolling
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll to the selected category section
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

      <div className="pb-6 md:pt-6 grid md:grid-cols-[34%_1fr] gap-4">
        {/* Sidebar navigation for larger screens */}
        <ul className="hidden md:block h-max sticky lg:top-36 md:top-20 py-2 px-1 border rounded-3xl divide-y">
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

        {/* Horizontal scroll navigation for smaller screens */}
        <div className="md:hidden mt-4 -mx-4 bg-secondary sticky top-16 overflow-hidden">
          <div className="h-14 flex overflow-x-auto text-light">
            {faqData.map(({ category }) => (
              <div key={category} className="h-full px-4">
                <button
                  key={category}
                  onClick={() => scrollToSection(category)}
                  className="h-full relative"
                >
                  <span className="text-left text-nowrap">{category}</span>

                  {activeCategory === category && (
                    <span className="h-1 w-full absolute left-0 bottom-0 bg-primary" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ content sections */}
        <div className="flex-1 md:px-6 space-y-6">
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
