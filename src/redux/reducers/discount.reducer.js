import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, DISCOUNT_ACTION } from "../CONSTANTS";

const initialValue = {
  discount: {
    data: "",
    loading: false,
    error: "",
  },
  voucherList: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  voucherDetail: {
    data: {},
    loading: false,
    error: "",
  },
  createVoucher: {
    loading: false,
    error: "",
  },
  updateVoucher: {
    loading: false,
    error: "",
  },
  deleteVoucher: {
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

  [REQUEST(DISCOUNT_ACTION.GET_VOUCHER_LIST)]: (state, action) => {
    return {
      ...state,
      voucherList: {
        ...state.voucherList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(DISCOUNT_ACTION.GET_VOUCHER_LIST)]: (state, action) => {
    const { data, meta } = action.payload;

    return {
      ...state,
      voucherList: {
        ...state.voucherList,
        data: data,
        meta: meta,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(DISCOUNT_ACTION.GET_VOUCHER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      voucherList: {
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(DISCOUNT_ACTION.GET_VOUCHER_DETAIL)]: (state, action) => {
    return {
      ...state,
      voucherDetail: {
        ...state.voucherDetail,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(DISCOUNT_ACTION.GET_VOUCHER_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      voucherDetail: {
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(DISCOUNT_ACTION.GET_VOUCHER_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      voucherDetail: {
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(DISCOUNT_ACTION.CREATE_VOUCHER)]: (state, action) => {
    return {
      ...state,
      createVoucher: {
        ...state.createVoucher,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(DISCOUNT_ACTION.CREATE_VOUCHER)]: (state, action) => {
    return {
      ...state,
      createVoucher: {
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(DISCOUNT_ACTION.CREATE_VOUCHER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createVoucher: {
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(DISCOUNT_ACTION.UPDATE_VOUCHER)]: (state, action) => {
    return {
      ...state,
      updateVoucher: {
        ...state.updateVoucher,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(DISCOUNT_ACTION.UPDATE_VOUCHER)]: (state, action) => {
    return {
      ...state,
      updateVoucher: {
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(DISCOUNT_ACTION.UPDATE_VOUCHER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateVoucher: {
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(DISCOUNT_ACTION.DELETE_VOUCHER)]: (state, action) => {
    return {
      ...state,
      deleteVoucher: {
        ...state.deleteVoucher,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(DISCOUNT_ACTION.DELETE_VOUCHER)]: (state, action) => {
    return {
      ...state,
      deleteVoucher: {
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(DISCOUNT_ACTION.DELETE_VOUCHER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteVoucher: {
        loading: false,
        error: error,
      },
    };
  },
});

export default discountReducer;
