import { Add_To_Cart, Remove_From_Cart } from "../actionTypes/ActionTypes";

export const addToCart = (product) => {
  return {
    type: Add_To_Cart,
    payload: product,
  };
};
export const removeProduct = (product) => {
  return {
    type: Remove_From_Cart,
    payload: product,
  };
};
