"use client";

import { useState } from "react";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

const CartContent = () => {
  const [cart, setCart] = useState([
    {
      quantity: 1,
      product: {
        id: "5",
        name: "Dr. Reckeweg Vita-C Forte 10 ml Tonic 12's",
        price: "₹1,074.47",
        originalPrice: "₹1,390.00",
        discount: "23% OFF",
        image:
          "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:180/Gw2ozipTfF-dr_reckeweg_vita_c_forte_10_ml_tonic_12s_0_0.jpg",
      },
    },
    {
      quantity: 2,
      product: {
        id: "6",
        name: "Dr. Reckeweg Vita-C Forte 10 ml Tonic 12's",
        price: "₹1,074.47",
        originalPrice: "₹1,390.00",
        discount: "23% OFF",
        image:
          "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:180/Gw2ozipTfF-dr_reckeweg_vita_c_forte_10_ml_tonic_12s_0_0.jpg",
      },
    },
    {
      quantity: 3,
      product: {
        id: "7",
        name: "Dr. Reckeweg Vita-C Forte 10 ml Tonic 12's",
        price: "₹1,074.47",
        originalPrice: "₹1,390.00",
        discount: "23% OFF",
        image:
          "https://cdn.netmeds.tech/v2/plain-cake-860195/netmed/wrkr/products/pictures/item/free/resize-w:180/Gw2ozipTfF-dr_reckeweg_vita_c_forte_10_ml_tonic_12s_0_0.jpg",
      },
    },
  ]);

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
        <CartItemList cart={cart} />
        <CartSummary />
      </div>
    </>
  );
};

export default CartContent;
