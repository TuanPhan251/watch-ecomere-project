import { createAction } from "@reduxjs/toolkit";

import { PRODUCT_ACTION, REQUEST } from "../CONSTANTS";

export const getProductListAction = createAction(
  REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)
);
export const createProductAction = createAction(
  REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)
);
export const updateProductAction = createAction(
  REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT)
);
export const deleteProductAction = createAction(
  REQUEST(PRODUCT_ACTION.DELETE_PRODUCT)
);
