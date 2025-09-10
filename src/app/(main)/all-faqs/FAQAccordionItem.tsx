import clsx from "clsx";
import { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

interface FAQAccordionItemProps {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}

const FAQAccordionItem = ({ faq, isOpen, onToggle }: FAQAccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const { question, answer } = faq || {};

  return (
    <div className="border-b text-dark-light">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between"
      >
        <span className="font-bold text-left">{question}</span>

        <FaAngleDown
          className={clsx(
            "text-secondary transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-400 ease-in-out"
        style={{
          height: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <p className="mb-4">{answer}</p>
      </div>
    </div>
  );
};

export default FAQAccordionItem;
