import { createAction } from "@reduxjs/toolkit";

import { REQUEST, DISCOUNT_ACTION } from "../CONSTANTS";

export const getDiscountAction = createAction(
  REQUEST(DISCOUNT_ACTION.DISCOUNT)
);

export const getVoucherListAction = createAction(
  REQUEST(DISCOUNT_ACTION.GET_VOUCHER_LIST)
);
export const getVoucherDetailAction = createAction(
  REQUEST(DISCOUNT_ACTION.GET_VOUCHER_DETAIL)
);
export const createVoucherAction = createAction(
  REQUEST(DISCOUNT_ACTION.CREATE_VOUCHER)
);
export const updateVoucherAction = createAction(
  REQUEST(DISCOUNT_ACTION.UPDATE_VOUCHER)
);
export const deleteVoucherAction = createAction(
  REQUEST(DISCOUNT_ACTION.DELETE_VOUCHER)
);
