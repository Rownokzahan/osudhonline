interface FAQMobileNavProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const FAQMobileNav = ({
  categories,
  activeCategory,
  onSelectCategory,
}: FAQMobileNavProps) => {
  return (
    <div className="md:hidden mt-4 -mx-4 bg-secondary sticky top-16 overflow-hidden">
      <div className="h-14 flex overflow-x-auto text-light">
        {categories.map((category) => (
          <div key={category} className="h-full px-4">
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
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
  );
};

export default FAQMobileNav;
