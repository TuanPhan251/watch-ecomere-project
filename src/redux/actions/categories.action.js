import { createAction } from "@reduxjs/toolkit";

import { REQUEST, CATEGORY_ACTION } from "../CONSTANTS";

export const getCategoriesListAction = createAction(
  REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST)
);

export const getCategoriesDetailAction = createAction(
  REQUEST(CATEGORY_ACTION.GET_CATEGORY_DETAIL)
);

export const createCategoryAction = createAction(
  REQUEST(CATEGORY_ACTION.CREATE_NEW_CATEGORY)
);

export const updateCategoryAction = createAction(
  REQUEST(CATEGORY_ACTION.UPDATE_CATEGORY)
);
