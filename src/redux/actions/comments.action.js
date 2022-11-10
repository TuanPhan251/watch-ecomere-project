import { createAction } from "@reduxjs/toolkit";

import { REQUEST, COMMENTS_ACTION } from "../CONSTANTS";

export const getCommentListAction = createAction(
  REQUEST(COMMENTS_ACTION.GET_COMMENTS_LIST)
);
export const createCommentAction = createAction(
  REQUEST(COMMENTS_ACTION.CREATE_COMMENT)
);
export const clearCommentListAction = createAction(
  REQUEST(COMMENTS_ACTION.CLEAR_COMMENTS_LIST)
);
