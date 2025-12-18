import { Product } from "@/types";
import Link from "next/link";
import SaveButton from "./SaveButton";
import AddToCartButton from "./AddToCartButton";
import Image from "next/image";

interface CarouselProductCardProps {
  product: Product;
}

const CarouselProductCard = ({ product }: CarouselProductCardProps) => {
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
    <div className="p-2 rounded-2xl bg-white">
      <div className="relative">
        <Link href={`product/${slug}`}>
          <Image
            width={180}
            height={180}
            src={image}
            alt={name}
            className="size-full rounded-2xl object-cover"
          />

          <div className="h-25 my-3 space-y-1">
            <h3 className="text-dark-light line-clamp-2 text-sm">
              {name}
            </h3>
            <p className="text-dark-light/60 text-xs font-semibold">
              By {manufacturer}
            </p>

            <div className="min-w-0 flex flex-wrap gap-x-2 items-center text-xs font-semibold">
              <p className="text-sm font-bold">₹{currentPrice}</p>
              <p className="text-dark-light/70 line-through decoration-dark-light/30">
                ₹{originalPrice}
              </p>
              <p className="text-tertiary">{discountPercentage}% OFF</p>
            </div>
          </div>
        </Link>

        <AddToCartButton productId={id} className="w-23" />
        <SaveButton productId={id} />
      </div>
    </div>
  );
};

export default CarouselProductCard;
