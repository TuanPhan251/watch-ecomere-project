import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, ORDER_ACTION } from "../CONSTANTS";

const initialValue = {
  orderList: {
    data: [],
    loading: false,
    error: "",
  },
  coupons: {
    data: {},
    loading: false,
    error: "",
  },
};

const orderReducer = createReducer(initialValue, {
  [REQUEST(ORDER_ACTION.ORDER_PRODUCT)]: (state, action) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.ORDER_PRODUCT)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(ORDER_ACTION.ORDER_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(ORDER_ACTION.CLEAR_ORDER_LIST)]: (state, action) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.CLEAR_ORDER_LIST)]: (state, action) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(ORDER_ACTION.CLEAR_ORDER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: false,
        error: error,
      },
    };
  },
});

export default orderReducer;
