import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, CATEGORY_ACTION } from "../CONSTANTS";

const initialValue = {
  categoryList: {
    data: [],
    loading: false,
    error: "",
  },
  createCategory: {
    loading: false,
    error: "",
  },
};

const categoryReducer = createReducer(initialValue, {
  [REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(CATEGORY_ACTION.CREATE_NEW_CATEGORY)]: (state, action) => {
    return {
      ...state,
      createCategory: {
        ...state.createCategory,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.CREATE_NEW_CATEGORY)]: (state, action) => {
    return {
      ...state,
      createCategory: {
        ...state.createCategory,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(CATEGORY_ACTION.CREATE_NEW_CATEGORY)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createCategory: {
        ...state.createCategory,
        loading: false,
        error: error,
      },
    };
  },
});

export default categoryReducer;
