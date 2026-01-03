import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

const OrdersPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <FiShoppingBag size={120} className="mx-auto" />

      <h3 className="mt-4 font-black text-xl">No Orders Found</h3>

      <div className="mt-5 flex justify-center gap-1 items-center text-xs">
        <span className="text-dark-light">or</span>
        <Link href={"/"} className="text-secondary font-bold">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrdersPage;
