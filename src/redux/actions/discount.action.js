import { createAction } from "@reduxjs/toolkit";

import { REQUEST, DISCOUNT_ACTION } from "../CONSTANTS";

export const getDiscountAction = createAction(
  REQUEST(DISCOUNT_ACTION.DISCOUNT)
);
