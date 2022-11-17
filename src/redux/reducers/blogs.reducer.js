import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, BLOG_ACTION } from "../CONSTANTS";

const initialValue = {
  blogList: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  blogDetail: {
    data: {},
    meta: {},
    loading: false,
    error: "",
  },
  createBlog: {
    loading: false,
    error: "",
  },
  updateBlog: {
    loading: false,
    error: "",
  },
  deleteBlog: {
    loading: false,
    error: "",
  },
};

const blogsReducer = createReducer(initialValue, {
  [REQUEST(BLOG_ACTION.GET_BLOG_LIST)]: (state, action) => {
    return {
      ...state,
      blogList: {
        ...state.blogList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.GET_BLOG_LIST)]: (state, action) => {
    const { data, meta, more } = action.payload;
    return {
      ...state,
      blogList: {
        ...state.blogList,
        data: more ? [...state.blogList.data, ...data] : data,
        meta: meta,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(BLOG_ACTION.GET_BLOG_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      blogList: {
        ...state.blogList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(BLOG_ACTION.GET_BLOG_DETAIL)]: (state, action) => {
    return {
      ...state,
      blogDetail: {
        ...state.blogDetail,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.GET_BLOG_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      blogDetail: {
        ...state.blogDetail,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(BLOG_ACTION.GET_BLOG_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      blogDetail: {
        ...state.blogDetail,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(BLOG_ACTION.CREATE_BLOG)]: (state, action) => {
    return {
      ...state,
      createBlog: {
        ...state.createBlog,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.CREATE_BLOG)]: (state, action) => {
    return {
      ...state,
      createBlog: {
        ...state.createBlog,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(BLOG_ACTION.CREATE_BLOG)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createBlog: {
        ...state.createBlog,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(BLOG_ACTION.UPDATE_BLOG)]: (state, action) => {
    return {
      ...state,
      updateBlog: {
        ...state.updateBlog,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.UPDATE_BLOG)]: (state, action) => {
    return {
      ...state,
      updateBlog: {
        ...state.updateBlog,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(BLOG_ACTION.UPDATE_BLOG)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateBlog: {
        ...state.updateBlog,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(BLOG_ACTION.DELETE_BLOG)]: (state, action) => {
    return {
      ...state,
      deleteBlog: {
        ...state.deleteBlog,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.DELETE_BLOG)]: (state, action) => {
    return {
      ...state,
      deleteBlog: {
        ...state.deleteBlog,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(BLOG_ACTION.DELETE_BLOG)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteBlog: {
        ...state.deleteBlog,
        loading: false,
        error: error,
      },
    };
  },
});

export default blogsReducer;
