import ProductCard from "@/compoents/cards/ProductCard";
import Breadcrumb from "./Breadcrumb";
import SortButton from "./SortButton";
import { products } from "@/data/products";
import FiltersSidebar from "./FiltersSidebar";

const ProductsPageDesktop = () => {
  return (
    <div className="hidden lg:block">
      <Breadcrumb />

      <div className="ui-container grid grid-cols-[25%_1fr] gap-4">
        <FiltersSidebar />

        <div>
          <h3 className="text-2xl font-black">Sugar Substitutes</h3>

          <div className="py-4 flex justify-between">
            <p className="text-sm font-bold">
              Showing results in &apos;Sugar Substitutes&apos;
            </p>

            <SortButton />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="p-1 border rounded-2xl">
                <ProductCard product={product} fullWidthButton={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageDesktop;
