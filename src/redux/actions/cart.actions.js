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
