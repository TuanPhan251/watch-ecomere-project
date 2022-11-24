import { createReducer } from "@reduxjs/toolkit";
import { CART_ACTION, REQUEST } from "../CONSTANTS";
const initialValue = {
  cartList: JSON.parse(localStorage.getItem("cart")) || [],
  checkoutInfo: {},
  checkoutPayment: {},
  checkoutCoupon: {},
};

const cartReducer = createReducer(initialValue, {
  [REQUEST(CART_ACTION.ADD_TO_CART)]: (state, actions) => {
    const { product, productAmount } = actions.payload;

    let index =
      state.cartList.findIndex((item) => item.id === product.data?.id) || 0;

    if (index === -1) {
      const newItem = {
        // ...product.data,
        name: product.data.name,
        category: product.data.category,
        discountPercent: product.data.discountPercent,
        gender: product.data.gender,
        id: product.data.id,
        images: product.data.images[0].url,
        stock: product.data.stock,
        price: product.data.price,
        finalPrice: product.data.finalPrice,
        totalAmount: productAmount,
        isDiscount: product.data.isDiscount,
        totalPrice: product.data.finalPrice * productAmount,
      };
      const newCartList = [newItem, ...state.cartList];

      localStorage.setItem("cart", JSON.stringify(newCartList));

      return {
        ...state,
        cartList: newCartList,
      };
    } else {
      const totalAmount = state.cartList[index].totalAmount + productAmount;
      const existProduct = {
        ...state.cartList[index],
        totalAmount: parseInt(totalAmount),
        totalPrice: parseFloat(totalAmount * product.data.finalPrice),
      };
      const newCartList = [...state.cartList];
      newCartList.splice(index, 1, existProduct);

      localStorage.setItem("cart", JSON.stringify(newCartList));

      return {
        ...state,
        cartList: newCartList,
      };
    }
  },
  [REQUEST(CART_ACTION.UPDATE_CART_ITEM)]: (state, actions) => {
    const { product, amount } = actions.payload;
    const newCartList = [...state.cartList];

    let index = state.cartList.findIndex((item) => item.id === product.id);

    if (amount === 0) {
      newCartList.splice(index, 1);
    } else {
      const newItem = {
        ...state.cartList[index],
        totalAmount: amount,
        totalPrice: product.finalPrice * amount,
      };
      newCartList.splice(index, 1, newItem);
    }

    localStorage.setItem("cart", JSON.stringify(newCartList));

    return {
      ...state,
      cartList: newCartList,
    };
  },
  [REQUEST(CART_ACTION.REMOVE_CART_ITEM)]: (state, action) => {
    const { productId } = action.payload;
    const newCartList = [...state.cartList].filter(
      (item) => item.id !== productId
    );
    localStorage.setItem("cart", JSON.stringify(newCartList));

    return {
      ...state,
      cartList: newCartList,
    };
  },
  [REQUEST(CART_ACTION.SET_COUPON_DATA)]: (state, action) => {
    const { data } = action.payload;

    return {
      ...state,
      checkoutCoupon: data,
    };
  },
  [REQUEST(CART_ACTION.SET_CHECKOUT_INFO_DATA)]: (state, action) => {
    return {
      ...state,
      checkoutInfo: action.payload,
    };
  },
  [REQUEST(CART_ACTION.CLEAR_CART_ITEM)]: (state, action) => {
    localStorage.setItem("cart", JSON.stringify([]));

    return {
      ...state,
      cartList: [],
      checkoutInfo: {},
      checkoutPayment: {},
      checkoutCoupon: {},
    };
  },
});

export default cartReducer;
