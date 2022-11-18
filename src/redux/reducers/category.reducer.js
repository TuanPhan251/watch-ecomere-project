import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, CATEGORY_ACTION } from "../CONSTANTS";

const initialValue = {
  categoryList: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  categoryDetail: {
    data: {},
    loading: false,
    error: "",
  },
  createCategory: {
    loading: false,
    error: "",
  },
  updateCategory: {
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
    const { data, meta } = action.payload;
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        data: data,
        meta: meta,
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

  [REQUEST(CATEGORY_ACTION.GET_CATEGORY_DETAIL)]: (state, action) => {
    return {
      ...state,
      categoryDetail: {
        ...state.categoryDetail,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.GET_CATEGORY_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      categoryDetail: {
        ...state.categoryDetail,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(CATEGORY_ACTION.GET_CATEGORY_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      categoryDetail: {
        ...state.categoryDetail,
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

  [REQUEST(CATEGORY_ACTION.UPDATE_CATEGORY)]: (state, action) => {
    return {
      ...state,
      updateCategory: {
        ...state.updateCategory,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.UPDATE_CATEGORY)]: (state, action) => {
    return {
      ...state,
      updateCategory: {
        ...state.updateCategory,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(CATEGORY_ACTION.UPDATE_CATEGORY)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateCategory: {
        ...state.updateCategory,
        loading: false,
        error: error,
      },
    };
  },
});

export default categoryReducer;
