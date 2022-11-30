import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, USER_ACTION } from "../CONSTANTS";

const initialValue = {
  userInfo: {
    data: {},
    loading: false,
    error: "",
  },
  userList: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  userDetail: {
    data: {},
    loading: false,
    error: "",
  },
  loginData: {
    loading: false,
    error: "",
  },
  logoutData: {
    loading: false,
    error: "",
  },
  registerData: {
    loading: false,
    error: "",
  },
  updateInfoData: {
    loading: false,
    error: "",
  },
  updatePasswordData: {
    loading: false,
    error: "",
  },
};

const userReducer = createReducer(initialValue, {
  [REQUEST(USER_ACTION.LOGIN)]: (state, action) => {
    return {
      ...state,
      loginData: {
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.LOGIN)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      loginData: {
        loading: false,
        error: "",
      },
      userInfo: {
        ...state.userInfo,
        data: data,
      },
    };
  },
  [FAIL(USER_ACTION.LOGIN)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      loginData: {
        ...state.loginData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.LOGOUT)]: (state, action) => {
    localStorage.removeItem("accessToken");

    return {
      ...state,
      userInfo: {
        data: {},
        loading: false,
        error: "",
      },
    };
  },

  [REQUEST(USER_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      registerData: {
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      registerData: {
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(USER_ACTION.REGISTER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      registerData: {
        ...state.registerData,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userList: {
        ...state.userList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    return {
      ...state,
      userList: {
        ...state.userList,
        loading: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      ...state,
      userList: {
        ...state.userList,
        data: data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userList: {
        ...state.userList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.GET_USER_DETAIL)]: (state, action) => {
    return {
      ...state,
      userDetail: {
        ...state.userDetail,
        loading: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_DETAIL)]: (state, action) => {
    const { data, meta } = action.payload;
    return {
      ...state,
      userDetail: {
        ...state.userDetail,
        data: data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userDetail: {
        ...state.userDetail,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.UPDATE_USER_INFO)]: (state, action) => {
    return {
      ...state,
      updateInfoData: {
        ...state.updateInfoData,
        loading: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.UPDATE_USER_INFO)]: (state, action) => {
    return {
      ...state,
      updateInfoData: {
        ...state.updateInfoData,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.UPDATE_USER_INFO)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateInfoData: {
        ...state.updateInfoData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.UPDATE_USER_PASSWORD)]: (state, action) => {
    return {
      ...state,
      updatePasswordData: {
        ...state.updatePasswordData,
        loading: true,
      },
    };
  },
  [SUCCESS(USER_ACTION.UPDATE_USER_PASSWORD)]: (state, action) => {
    return {
      ...state,
      updatePasswordData: {
        ...state.updatePasswordData,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.UPDATE_USER_PASSWORD)]: (state, action) => {
    return {
      ...state,
      updatePasswordData: {
        ...state.updatePasswordData,
        loading: false,
        error: action.payload,
      },
    };
  },
});

export default userReducer;
