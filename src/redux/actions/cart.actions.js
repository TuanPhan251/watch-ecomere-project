import { createAction } from "@reduxjs/toolkit";

import { CART_ACTION, REQUEST } from "../CONSTANTS";

export const addItemToCartAction = createAction(
  REQUEST(CART_ACTION.ADD_TO_CART)
);
export const updateCartItemAction = createAction(
  REQUEST(CART_ACTION.UPDATE_CART_ITEM)
);
export const removeCartItemAction = createAction(
  REQUEST(CART_ACTION.REMOVE_CART_ITEM)
);
export const clearCartItemAction = createAction(
  REQUEST(CART_ACTION.CLEAR_CART_ITEM)
);
export const setCheckoutInfoAction = createAction(
  REQUEST(CART_ACTION.SET_CHECKOUT_INFO_DATA)
);
export const setCouponInfoAction = createAction(
  REQUEST(CART_ACTION.SET_COUPON_DATA)
);
export const setPaymentInfoAction = createAction(
  REQUEST(CART_ACTION.SET_PAYMENT_DATA)
);
