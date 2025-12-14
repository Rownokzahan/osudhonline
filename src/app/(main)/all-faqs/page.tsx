"use client";

import { faqData } from "./faqData";
import { useRef, useState } from "react";
import FAQAccordionItem from "./components/FAQAccordionItem";
import FAQSidebar from "./components/FAQSidebar";
import FAQMobileNav from "./components/FAQMobileNav";

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
        <FAQSidebar
          categories={faqData.map((f) => f.category)}
          activeCategory={activeCategory}
          onSelectCategory={scrollToSection}
        />

        {/* Horizontal scroll navigation for smaller screens */}
        <FAQMobileNav
          categories={faqData.map((f) => f.category)}
          activeCategory={activeCategory}
          onSelectCategory={scrollToSection}
        />

        {/* FAQ content sections */}
        <div className="flex-1 md:px-6 space-y-6">
          {faqData.map(({ category, faqs }) => (
            <div
              key={category}
              ref={(el) => {
                sectionRefs.current[category] = el;
              }}
              className="scroll-mt-36 md:scroll-mt-22 lg:scroll-mt-36"
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
