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
      const newItem = {
        ...data,
        totalAmount: 1,
        totalPrice: data.price,
      };

      return {
        ...state,
        cartList: [newItem, ...state.cartList],
      };
    } else {
      const totalAmount = state.cartList[index].totalAmount + 1;
      const existProduct = {
        ...data,
        totalAmount: parseInt(totalAmount),
        totalPrice: parseFloat(totalAmount * data.price),
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
    const { data, type } = action.payload;
    const newCartList = [...state.cartList];

    let index = state.cartList.find((item) => item.id === data.id);

    if (type === "decrease") {
      if (data.totalAmount === 1) {
        newCartList.splice(index, 1);

        return {
          ...state,
          cartList: newCartList,
        };
      } else {
        const newItem = {
          ...data,
          totalAmount: data.totalAmount - 1,
          totalPrice: data.totalAmount * data.price,
        };

        newCartList.splice(index, 1, newItem);
        return {
          ...state,
          cartList: newCartList,
        };
      }
    } else {
      newCartList.splice(index, 1);

      return {
        ...state,
        cartList: newCartList,
      };
    }
  },
});

export default cartReducer;
