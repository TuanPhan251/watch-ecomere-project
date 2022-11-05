import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, LOCATION_ACTION } from "../CONSTANTS";

const initialValue = {
  cityList: {
    data: [],
    loading: false,
    error: "",
  },
  districtList: {
    data: [],
    loading: false,
    error: "",
  },
  wardList: {
    data: [],
    loading: false,
    error: "",
  },
};

const locationReducer = createReducer(initialValue, {
  [REQUEST(LOCATION_ACTION.GET_CITY_LIST)]: (state, action) => {
    return {
      ...state,
      cityList: {
        ...state.cityList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(LOCATION_ACTION.GET_CITY_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      cityList: {
        ...state.cityList,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(LOCATION_ACTION.GET_CITY_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      cityList: {
        ...state.cityList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(LOCATION_ACTION.GET_DISTRICT_LIST)]: (state, action) => {
    return {
      ...state,
      districtList: {
        ...state.districtList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(LOCATION_ACTION.GET_DISTRICT_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      districtList: {
        ...state.districtList,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(LOCATION_ACTION.GET_DISTRICT_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      districtList: {
        ...state.districtList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(LOCATION_ACTION.GET_WARD_LIST)]: (state, action) => {
    return {
      ...state,
      wardList: {
        ...state.wardList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(LOCATION_ACTION.GET_WARD_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      wardList: {
        ...state.wardList,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(LOCATION_ACTION.GET_WARD_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      wardList: {
        ...state.wardList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(LOCATION_ACTION.CLEAR_LOCATION)]: (state, action) => {
    return {
      ...state,
      cityList: {
        data: [],
        loading: false,
        error: "",
      },
      districtList: {
        data: [],
        loading: false,
        error: "",
      },
      wardList: {
        data: [],
        loading: false,
        error: "",
      },
    };
  },
});

export default locationReducer;
