import Link from "next/link";
import { TbShoppingCartSearch } from "react-icons/tb";

const EmptyCart = () => {
  return (
    <div className="px-2">
      <div className="w-max mx-auto mb-2 opacity-40">
        <TbShoppingCartSearch size={120} />
      </div>

      <div className="text-center text-dark-light font-medium">
        <h4 className="font-black text-dark">No items in cart</h4>

        <p className="mt-1 text-sm">
          It’s never too late! Add items you saved for later.
        </p>

        <div className="mt-2 text-sm flex gap-1 justify-center">
          <span>or</span>
          <Link href={"/"} className="font-semibold text-secondary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;