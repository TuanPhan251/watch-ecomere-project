import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, COMMENTS_ACTION } from "../CONSTANTS";

const initialValue = {
  commentList: {
    data: [],
    loading: false,
    error: "",
  },
  createComment: {
    loading: false,
    error: "",
  },
};

const commentsReducer = createReducer(initialValue, {
  [REQUEST(COMMENTS_ACTION.GET_COMMENTS_LIST)]: (state, action) => {
    return {
      ...state,
      commentList: {
        ...state.commentList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(COMMENTS_ACTION.GET_COMMENTS_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      commentList: {
        ...state.commentList,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(COMMENTS_ACTION.GET_COMMENTS_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      commentList: {
        ...state.commentList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(COMMENTS_ACTION.CREATE_COMMENT)]: (state, action) => {
    return {
      ...state,
      createComment: {
        ...state.createComment,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(COMMENTS_ACTION.CREATE_COMMENT)]: (state, action) => {
    return {
      ...state,
      createComment: {
        ...state.createComment,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(COMMENTS_ACTION.CREATE_COMMENT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createComment: {
        ...state.createComment,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(COMMENTS_ACTION.CLEAR_COMMENTS_LIST)]: (state, action) => {
    return {
      ...state,
      commentList: {
        data: [],
        loading: false,
        error: "",
      },
    };
  },
});

export default commentsReducer;
