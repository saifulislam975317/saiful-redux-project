import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      {cart
        .sort((a, b) => a._id - b._id)
        .map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
    </div>
  );
};

export default Cart;
