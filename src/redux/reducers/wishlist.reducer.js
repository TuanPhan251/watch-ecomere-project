import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, WISHLIST_ACTION } from "../CONSTANTS";

const initialValue = {
  wishlist: {
    data: [],
    loading: false,
    error: "",
  },
};

const wishlistReducer = createReducer(initialValue, {
  [REQUEST(WISHLIST_ACTION.GET_WISHLIST)]: (state, action) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(WISHLIST_ACTION.GET_WISHLIST)]: (state, action) => {
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
  [FAIL(WISHLIST_ACTION.GET_WISHLIST)]: (state, action) => {
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

  [REQUEST(WISHLIST_ACTION.CREATE_COMMENT)]: (state, action) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(WISHLIST_ACTION.CREATE_COMMENT)]: (state, action) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(WISHLIST_ACTION.CREATE_COMMENT)]: (state, action) => {
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

  [REQUEST(WISHLIST_ACTION.REMOVE_WISHLIST)]: (state, action) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(WISHLIST_ACTION.REMOVE_WISHLIST)]: (state, action) => {
    return {
      ...state,
      wishlist: {
        ...state.wishlist,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(WISHLIST_ACTION.REMOVE_WISHLIST)]: (state, action) => {
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

export default wishlistReducer;
