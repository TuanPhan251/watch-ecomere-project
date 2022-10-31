import { createAction } from "@reduxjs/toolkit";

import { REQUEST, COMMENTS_ACTION } from "../CONSTANTS";

export const getCommentListAction = createAction(
  REQUEST(COMMENTS_ACTION.GET_COMMENTS_LIST)
);
export const createCommentAction = createAction(
  REQUEST(COMMENTS_ACTION.CREATE_COMMENT)
);
