import { CartItem } from "@/types";
import CartCard from "./CartCard";

interface CartItemListProps {
  cart: CartItem[];
}

const CartItemList = ({ cart }: CartItemListProps) => {
  return (
    <div className="border-y-4 divide-y">
      {cart.map((cartItem, index) => (
        <CartCard key={index} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartItemList;
