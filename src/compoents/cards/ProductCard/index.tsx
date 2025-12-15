import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import SaveButton from "./SaveButton";

interface ProductCardProps {
  product: Product;
  fullWidthButton?: boolean;
}

const ProductCard = ({
  product,
  fullWidthButton = false,
}: ProductCardProps) => {
  const {
    id,
    name,
    image,
    manufacturer,
    currentPrice,
    originalPrice,
    discountPercentage,
  } = product;

  return (
    <div className="p-3 rounded-2xl bg-white relative">
      <Link href={""}>
        <figure className="w-full aspect-square">
          <Image
            width={180}
            height={180}
            src={image}
            alt={name}
            className="size-full object-ccover"
          />
        </figure>

        <div className="my-3 h-26 space-y-1">
          <h3 className="line-clamp-2 font-bold text-sm">{name}</h3>

          <p className="text-dark-light/60 text-xs font-semibold">
            By {manufacturer}
          </p>

          <div className="min-w-0 flex flex-wrap gap-x-2 items-center text-sm font-semibold">
            <p className="text-base font-bold">₹{currentPrice}</p>
            <p className="text-dark-light/70 line-through decoration-dark-light/30">
              ₹{originalPrice}
            </p>
            <p className="text-tertiary">{discountPercentage}% OFF</p>
          </div>
        </div>
      </Link>

      <div className="absolute top-2 right-2">
        <SaveButton productId={id} />
      </div>

      <AddToCartButton productId={id} isFullWidth={fullWidthButton} />
    </div>
  );
};

export default ProductCard;
