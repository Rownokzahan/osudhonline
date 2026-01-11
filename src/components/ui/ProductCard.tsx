import Image from "next/image";
import { Product } from "@/types";
import Link from "next/link";
import SaveButton from "./SaveButton";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    id,
    slug,
    name,
    image,
    manufacturer,
    currentPrice,
    originalPrice,
    discountPercentage,
  } = product || {};

  return (
    <div className="p-4 sm:p-3 sm:border sm:rounded-3xl">
      <div className="relative">
        <Link
          href={`/product/${slug}`}
          className="mb-4 sm:mb-3 grid grid-cols-[80px_1fr] sm:grid-cols-1 gap-2 sm:gap-3"
        >
          <Image
            width={180}
            height={180}
            src={image}
            alt={name}
            className="size-full rounded-2xl object-cover"
          />

          <div className="sm:h-22 space-y-1">
            <div className="pe-8 sm:pe-0 space-y-1">
              <h3 className="line-clamp-2 font-bold text-sm">{name}</h3>
              <p className="text-dark-light/60 text-xs font-semibold">
                By {manufacturer}
              </p>
            </div>

            <div className="min-w-0 flex flex-wrap gap-x-2 items-center text-sm font-semibold">
              <p className="text-base font-bold">₹{currentPrice}</p>
              <p className="text-dark-light/70 line-through decoration-dark-light/30">
                ₹{originalPrice}
              </p>
              <p className="text-tertiary">{discountPercentage}% OFF</p>
            </div>
          </div>
        </Link>

        <SaveButton productId={id} />

        <AddToCartButton
          productId={id}
          className="w-23 sm:w-full sm:h-11 ms-auto"
        />
      </div>
    </div>
  );
};

export default ProductCard;
