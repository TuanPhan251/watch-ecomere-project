import { createAction } from "@reduxjs/toolkit";

import { REQUEST, CATEGORY_ACTION } from "../CONSTANTS";

export const getCategoriesListAction = createAction(
  REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST)
);
