import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeProduct } from "./productAction/ProductAction";
import { useLocation } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  return (
    <div
      className="shadow-lg relative rounded-3xl border  p-3  text-indigo-900"
      key={product._id}
    >
      {pathname.includes("cart") && (
        <div className="absolute right-2 top-2  text-white grid place-items-center w-8 h-8 bg-indigo-500 rounded-full">
          <p>{product.quantity}</p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1  h-32">
        <ul className="">
          {product.keyFeature.map((feature) => {
            return (
              <li key={feature} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-indigo-500 rounded-full flex justify-between items-center py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart <FaShoppingCart></FaShoppingCart>
          </button>
        )}
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch(removeProduct(product))}
            className="bg-red-600 rounded-full flex justify-between items-center  py-1 px-2 flex-1 text-white text-bold"
          >
            Remove <BsFillTrashFill></BsFillTrashFill>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
