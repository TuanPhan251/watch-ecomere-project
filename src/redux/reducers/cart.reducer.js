import { createReducer } from "@reduxjs/toolkit";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../CONSTANTS/cart.constant";

const initialValue = {
  cartList: [],
};

const cartReducer = createReducer(initialValue, {
  ADD_PRODUCT_ACTION: (state, actions) => {
    const { product, productAmount } = actions.payload;

    let index =
      state.cartList.findIndex((item) => item.id === product.data?.id) || 0;

    if (index === -1) {
      const newItem = {
        ...product.data,
        totalAmount: productAmount,
        totalPrice: product.data.price,
      };

      return {
        ...state,
        cartList: [newItem, ...state.cartList],
      };
    } else {
      const totalAmount = state.cartList[index].totalAmount + productAmount;
      const existProduct = {
        ...product.data,
        totalAmount: parseInt(totalAmount),
        totalPrice: parseFloat(totalAmount * product.data.price),
      };

      const newCartList = [...state.cartList];
      newCartList.splice(index, 1, existProduct);

      return {
        ...state,
        cartList: newCartList,
      };
    }
  },
  REMOVE_PRODUCT_ACTION: (state, action) => {
    const { item, type } = action.payload;

    let index = state.cartList.findIndex((cartItem) => cartItem.id === item.id);

    if (type === "decrease") {
      if (item.totalAmount === 1) {
        const newCartList = [...state.cartList];

        newCartList.splice(index, 1);

        return {
          ...state,
          cartList: newCartList,
        };
      } else {
        const newCartList = [...state.cartList];

        const totalAmount = item.totalAmount - 1;

        const newItem = {
          ...item,
          totalAmount: totalAmount,
          totalPrice: totalAmount * item.price,
        };

        newCartList.splice(index, 1, newItem);
        return {
          ...state,
          cartList: newCartList,
        };
      }
    } else {
      const newCartList = [...state.cartList];
      newCartList.splice(index, 1);

      return {
        ...state,
        cartList: newCartList,
      };
    }
  },
});

export default cartReducer;
