import { Product } from "@/types";
import AddToCartButton from "./AddToCartButton";
import SaveButton from "./SaveButton";
import Image from "next/image";

interface ProductCardMobileProps {
  product: Product;
}

const ProductCardMobile = ({ product }: ProductCardMobileProps) => {
  const { id, name, currentPrice, originalPrice, discountPercentage, image } = product;

  return (
    <div className="space-y-1">
      <div className="flex items-start gap-1">
        <div className="flex-1 flex items-start gap-3">
          <Image
            width={90}
            height={90}
            src={image}
            alt=""
            className="size-19 rounded-xl object-cover"
          />

          <div className="flex-1">
            <p className="line-clamp-2 text-sm">{name}</p>

            <p className="mt-1 text-xs text-dark-light/70 font-medium">
              By Suger Free
            </p>

            <div className="my-2 flex gap-1.5 items-end flex-wrap">
              <p className="font-bold leading-4">{currentPrice}</p>
              <p className="text-xs text-dark-light/70 line-through decoration-dark-light/30">
                {originalPrice}
              </p>

              <p className="text-xs text-tertiary">{discountPercentage}%</p>
            </div>
          </div>
        </div>

        <SaveButton productId={id} />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xs text-dark-light">10 ml</p>
        <AddToCartButton productId={id} />
      </div>
    </div>
  );
};

export default ProductCardMobile;
