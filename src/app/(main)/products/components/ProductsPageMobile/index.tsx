import { products } from "@/data/products";
import FilterButton from "./FilterButton";
import SortButton from "./SortButton";
import ProductCardMobile from "@/compoents/cards/ProductCard/ProductCardMobile";

const ProductsPageMobile = () => {
  return (
    <div className="lg:hidden ui-container">
      <div className="py-2 flex items-center">
        <p className="text-xs">
          Showing results in &apos;Sugar Substitutes&apos;
        </p>

        <div className="flex items-center gap-2">
          <SortButton />
          <FilterButton />
        </div>
      </div>

      <div className="mt-4 grid gap-4">
        {products.map((product) => (
          <ProductCardMobile key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPageMobile;
