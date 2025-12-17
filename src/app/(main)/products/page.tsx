import ProductCard from "@/compoents/ui/ProductCard";
import { products } from "@/data/products";
import FiltersSidebarDesktop from "./components/FiltersSidebarDesktop";
import ProductsHeaderDesktop from "./components/ProductsHeaderDesktop";
import ProductsHeaderMobile from "./components/ProductsHeaderMobile";

const ProductsPage = () => {
  return (
    <div className="sm:ui-container my-6 lg:my-12 lg:grid grid-cols-[25%_1fr] gap-4">
      <FiltersSidebarDesktop />

      <div>
        <ProductsHeaderDesktop title={"Sugar Substitutes"} />
        <ProductsHeaderMobile title={"Sugar Substitutes"} />

        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-6 divide-y">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
