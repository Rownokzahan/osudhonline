import FilterButton from "./FilterButton";
import SortButton from "./SortButton";

type ProductsHeaderMobileProps = {
  title: string;
};

const ProductsHeaderMobile = ({ title }: ProductsHeaderMobileProps) => {
  return (
    <div className="lg:hidden px-4 sm:px-0 mb-4 flex items-center justify-between">
      <h3 className="font-bold">{title}</h3>

      <div className="flex items-center gap-2">
        <SortButton />
        <FilterButton />
      </div>
    </div>
  );
};

export default ProductsHeaderMobile;
