import { createAction } from "@reduxjs/toolkit";

import { REQUEST, BLOG_ACTION } from "../CONSTANTS";

export const getBlogListAction = createAction(
  REQUEST(BLOG_ACTION.GET_BLOG_LIST)
);
export const getBlogDetailAction = createAction(
  REQUEST(BLOG_ACTION.GET_BLOG_DETAIL)
);
export const createBlogAction = createAction(REQUEST(BLOG_ACTION.CREATE_BLOG));
export const updateBlogAction = createAction(REQUEST(BLOG_ACTION.UPDATE_BLOG));
export const deleteBlogAction = createAction(REQUEST(BLOG_ACTION.DELETE_BLOG));
export const clearBlogListAction = createAction(
  REQUEST(BLOG_ACTION.CLEAR_BLOG_LIST)
);
