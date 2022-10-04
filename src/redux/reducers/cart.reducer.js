import { createReducer } from "@reduxjs/toolkit";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../CONSTANTS/cart.constant";

const initialValue = {
  cartList: [],
};

const cartReducer = createReducer(initialValue, {
  ADD_PRODUCT_ACTION: (state, actions) => {
    const { data } = actions.payload;

    let index = state.cartList.findIndex((product) => product.id === data.id);

    if (index === -1) {
      const newProduct = {
        ...data,
        totalAmount: 1,
        totalPrice: data.price,
      };

      return {
        ...state,
        cartList: [newProduct, ...state.cartList],
      };
    } else {
      const totalAmount = state.cartList[index].totalAmount + 1;
      const existProduct = {
        ...data,
        totalAmount: parseInt(totalAmount),
        totalPrice: parseFloat(totalAmount * data.price),
      };

      const newcartList = [...state.cartList];
      newcartList.splice(index, 1, existProduct);

      return {
        ...state,
        cartList: newcartList,
      };
    }
  },
});

export default cartReducer;
