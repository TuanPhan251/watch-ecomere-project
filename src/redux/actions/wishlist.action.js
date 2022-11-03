import { createAction } from "@reduxjs/toolkit";

import { REQUEST, WISHLIST_ACTION } from "../CONSTANTS";

export const getWishlistAction = createAction(
  REQUEST(WISHLIST_ACTION.GET_WISHLIST)
);
export const addWishlistAction = createAction(
  REQUEST(WISHLIST_ACTION.ADD_WISHLIST)
);
export const removeWishlistAction = createAction(
  REQUEST(WISHLIST_ACTION.REMOVE_WISHLIST)
);
