import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, ORDER_ACTION } from "../CONSTANTS";

const initialValue = {
  orderList: {
    data: [],
    loading: false,
    error: "",
  },
  allOrders: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  orderDetail: {
    data: {},
    loading: false,
    error: "",
  },
  updateOrderData: {
    loading: false,
    error: "",
  },
};

const orderReducer = createReducer(initialValue, {
  [REQUEST(ORDER_ACTION.ORDER_PRODUCT)]: (state, action) => {
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.ORDER_PRODUCT)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
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
      orderList: {
        ...state.orderList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(ORDER_ACTION.GET_ALL_ORDERS)]: (state, action) => {
    return {
      ...state,
      allOrders: {
        ...state.allOrders,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.GET_ALL_ORDERS)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      allOrders: {
        ...state.allOrders,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(ORDER_ACTION.GET_ALL_ORDERS)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      allOrders: {
        ...state.allOrders,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(ORDER_ACTION.GET_ORDER_DETAIL)]: (state, action) => {
    return {
      ...state,
      orderDetail: {
        ...state.orderDetail,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.GET_ORDER_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      orderDetail: {
        ...state.orderDetail,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(ORDER_ACTION.GET_ORDER_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      orderDetail: {
        ...state.orderDetail,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(ORDER_ACTION.UPDATE_ORDER_STATUS)]: (state, action) => {
    return {
      ...state,
      updateOrderData: {
        ...state.updateOrderData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.UPDATE_ORDER_STATUS)]: (state, action) => {
    return {
      ...state,
      updateOrderData: {
        ...state.updateOrderData,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(ORDER_ACTION.UPDATE_ORDER_STATUS)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateOrderData: {
        ...state.updateOrderData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(ORDER_ACTION.CLEAR_ORDER_LIST)]: (state, action) => {
    return {
      ...state,
      orderList: {
        data: [],
        loading: false,
        error: "",
      },
    };
  },
});

export default orderReducer;
