import { createAction } from "@reduxjs/toolkit";
import { USER_ACTION, REQUEST } from "./../CONSTANTS";

export const loginAction = createAction(REQUEST(USER_ACTION.LOGIN));
export const registerAction = createAction(REQUEST(USER_ACTION.REGISTER));
export const getUserInfoAction = createAction(
  REQUEST(USER_ACTION.GET_USER_INFO)
);
