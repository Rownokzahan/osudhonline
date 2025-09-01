import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import SaveButton from "./SaveButton";

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

        <div className="h-24">
          <p className="line-clamp-2 text-dark-light text-sm">{name}</p>
          
          <div className="my-1 flex gap-2 items-center">
            <p className="font-bold text-sm">{price}</p>
            <p className="text-xs text-dark-light/70 line-through decoration-dark-light/30">
              {originalPrice}
            </p>
          </div>
          <p className="text-xs font-semibold text-tertiary">{discount}</p>
        </div>
      </Link>

      <div className="absolute top-2 right-2">
        <SaveButton productId={id} />
      </div>

      <AddToCartButton productId={id} />
    </div>
  );
};

export default ProductCard;
