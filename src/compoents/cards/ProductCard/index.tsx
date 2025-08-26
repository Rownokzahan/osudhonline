import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, originalPrice, discount, image } = product;

  return (
    <div className="p-2 rounded-2xl bg-white relative">
      <Link href={""}>
        <figure className="w-full mb-2 aspect-square">
          <Image
            width={180}
            height={180}
            src={image}
            alt={name}
            className="size-full object-ccover"
          />
        </figure>

        <p className="line-clamp-2 text-dark-light text-sm">{name}</p>

        <div className="h-15">
          <div className="my-1 flex gap-2 items-center">
            <p className="font-bold text-sm">{price}</p>
            <p className="text-xs text-dark-light/70 line-through decoration-dark-light/30">
              {originalPrice}
            </p>
          </div>
          <p className="text-xs font-semibold text-tertiary">{discount}</p>
        </div>
      </Link>

      <button className="absolute top-2 right-2">
        <CiBookmark size={24} className="text-dark-light" />
      </button>

      <AddToCartButton productId={id} />
    </div>
  );
};

export default ProductCard;
