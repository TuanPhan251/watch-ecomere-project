import { createAction } from "@reduxjs/toolkit";
import { USER_ACTION, REQUEST } from "./../CONSTANTS";

export const loginAction = createAction(REQUEST(USER_ACTION.LOGIN));
export const logoutAction = createAction(REQUEST(USER_ACTION.LOGOUT));
export const registerAction = createAction(REQUEST(USER_ACTION.REGISTER));
export const getUserInfoAction = createAction(
  REQUEST(USER_ACTION.GET_USER_INFO)
);
export const getUserListAction = createAction(
  REQUEST(USER_ACTION.GET_USER_LIST)
);
export const getUserDetailAction = createAction(
  REQUEST(USER_ACTION.GET_USER_DETAIL)
);
export const updateUserInfoAction = createAction(
  REQUEST(USER_ACTION.UPDATE_USER_INFO)
);
export const updateUserPasswordAction = createAction(
  REQUEST(USER_ACTION.UPDATE_USER_PASSWORD)
);
