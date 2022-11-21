import { createReducer } from "@reduxjs/toolkit";

import {
  PRODUCT_ACTION,
  REQUEST,
  SUCCESS,
  FAIL,
  WISHLIST_ACTION,
} from "../CONSTANTS";

const initialValue = {
  productListUser: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  productListAdmin: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  newProductsList: {
    data: [],
    loading: false,
    error: "",
  },
  productDetail: {
    data: [],
    loading: false,
    error: "",
  },
  createProductData: {
    loading: false,
    error: "",
  },
  updateProductData: {
    loading: false,
    error: "",
  },
  deleteProductData: {
    loading: false,
    error: "",
  },
};

const productReducer = createReducer(initialValue, {
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_USER)]: (state, action) => {
    return {
      ...state,
      productListUser: {
        ...state.productListUser,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST_USER)]: (state, action) => {
    const { data, more, meta } = action.payload;
    return {
      ...state,
      productListUser: {
        ...state.productListUser,
        data: more ? [...state.productListUser.data, ...data] : data,
        meta: meta,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST_USER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productListUser: {
        ...state.productListUser,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_ADMIN)]: (state, action) => {
    return {
      ...state,
      productListAdmin: {
        ...state.productListAdmin,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST_ADMIN)]: (state, action) => {
    const { data, more, meta } = action.payload;
    return {
      ...state,
      productListAdmin: {
        ...state.productListAdmin,
        data: more ? [...state.productListAdmin.data, ...data] : data,
        meta: meta,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST_ADMIN)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productListAdmin: {
        ...state.productListAdmin,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.GET_NEW_PRODUCTS_LIST)]: (state, action) => {
    return {
      ...state,
      newProductsList: {
        ...state.newProductsList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_NEW_PRODUCTS_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      newProductsList: {
        ...state.newProductsList,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_NEW_PRODUCTS_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      newProductsList: {
        ...state.newProductsList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.REMOVE_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productListUser: {
        data: [],
        meta: {},
        loading: false,
        error: "",
      },
      productListAdmin: {
        data: [],
        meta: {},
        loading: false,
        error: "",
      },
      newProductsList: {
        data: [],
        loading: false,
        error: "",
      },
      productDetail: {
        data: [],
        loading: false,
        error: "",
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        loading: false,
        error: error,
      },
    };
  },

  [SUCCESS(WISHLIST_ACTION.ADD_WISHLIST)]: (state, action) => {
    const { data } = action.payload;

    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: {
          ...state.productDetail.data,
          wishlists: [...state.productDetail.data.wishlists, data],
        },
        loading: false,
        error: "",
      },
    };
  },
  [SUCCESS(WISHLIST_ACTION.REMOVE_WISHLIST)]: (state, action) => {
    const { id } = action.payload;
    const newWishlist = state.productDetail.data.wishlists?.filter(
      (item) => item.id !== id
    );

    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: {
          ...state.productDetail.data,
          wishlists: newWishlist,
        },
        loading: false,
        error: "",
      },
    };
  },
});

export default productReducer;
