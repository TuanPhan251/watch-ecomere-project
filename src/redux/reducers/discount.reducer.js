import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, DISCOUNT_ACTION } from "../CONSTANTS";

const initialValue = {
  discount: {
    data: "",
    loading: false,
    error: "",
  },
};

const discountReducer = createReducer(initialValue, {
  [REQUEST(DISCOUNT_ACTION.DISCOUNT)]: (state, action) => {
    return {
      ...state,
      discount: {
        ...state.discount,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(DISCOUNT_ACTION.DISCOUNT)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      discount: {
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(DISCOUNT_ACTION.DISCOUNT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      discount: {
        loading: false,
        error: error,
      },
    };
  },
});

export default discountReducer;
