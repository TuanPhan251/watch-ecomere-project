import { createAction } from "@reduxjs/toolkit";

import { REQUEST, ORDER_ACTION } from "../CONSTANTS";

export const orderProductAction = createAction(
  REQUEST(ORDER_ACTION.ORDER_PRODUCT)
);
export const getOrderListAction = createAction(
  REQUEST(ORDER_ACTION.GET_ORDER_LIST)
);
export const getAllOrdersAction = createAction(
  REQUEST(ORDER_ACTION.GET_ALL_ORDERS)
);
export const getOrderDetailAction = createAction(
  REQUEST(ORDER_ACTION.GET_ORDER_DETAIL)
);
export const updateOrderStatusAction = createAction(
  REQUEST(ORDER_ACTION.UPDATE_ORDER_STATUS)
);
export const clearOrderListAction = createAction(
  REQUEST(ORDER_ACTION.CLEAR_ORDER_LIST)
);
