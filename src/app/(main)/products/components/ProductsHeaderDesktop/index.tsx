import SortDropdown from "./SortDropdown";

type ProductsHeaderDesktopProps = {
  title: string;
};

const ProductsHeaderDesktop = ({ title }: ProductsHeaderDesktopProps) => {
  return (
    <div className="hidden lg:flex pb-4 justify-between items-center">
      <h3 className="text-2xl font-black">{title}</h3>
      <SortDropdown />
    </div>
  );
};

export default ProductsHeaderDesktop;
