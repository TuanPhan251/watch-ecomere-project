import { takeEvery, debounce, put } from "redux-saga/effects";
import axios from "axios";

import { PRODUCT_ACTION, REQUEST, SUCCESS, FAIL } from "../CONSTANTS";

function* getProductListUserSaga(action) {
  try {
    const { params, more } = action.payload;
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        _expand: "category",
        _embed: ["images", "comments"],
        _page: params.page,
        _limit: params.limit,
        isHidden: false,
        ...(params.categoryId && {
          categoryId: params.categoryId,
        }),
        ...(params.keyword && {
          q: params.keyword,
        }),
        ...(params.priceOder && {
          finalPrice: params.priceOder,
        }),
        ...(params.gender && {
          gender: params.gender,
        }),
        ...(params.priceRange && {
          price_gte: params.priceRange[0],
          price_lte: params.priceRange[1],
        }),
        ...(params.priceSort && {
          _sort: "price",
          _order: params.priceSort,
        }),
        ...(params.type && {
          movement: params.type,
        }),
        // ...(params.caseSize && {
        //   caseSize_gte: params.caseSize[0],
        //   caseSize_lte: params.caseSize[1],
        // }),
        ...(params.caseSize && {
          caseSize_gte: params.caseSize.split(",")[0],
          caseSize_lte: params.caseSize.split(",")[1],
        }),
        ...(params.glassMaterial && {
          glassMaterial: params.glassMaterial,
        }),
        ...(params.isNew && {
          isNew: params.isNew,
        }),
        ...(params.isDiscount && {
          isDiscount: params.isDiscount,
        }),
        ...(params.productId && {
          id: params.productId,
        }),
      },
    });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST_USER),
      payload: {
        data: result.data,
        meta: {
          total: parseInt(result.headers["x-total-count"]),
          page: params.page,
          limit: params.limit,
        },
        more: more,
      },
    });
  } catch (e) {
    console.log(
      "🚀 ~ file: products.saga.js ~ line 73 ~ function*getProductListSaga ~ e",
      e
    );
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST_USER),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

function* getProductListAdminSaga(action) {
  try {
    const { params, more } = action.payload;
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        _expand: "category",
        _embed: ["images", "comments"],
        _page: params.page,
        _limit: params.limit,
        ...(params.isHidden && {
          isHidden: params.isHidden,
        }),
        ...(params.categoryId && {
          categoryId: params.categoryId,
        }),
        ...(params.keyword && {
          q: params.keyword,
        }),
        ...(params.priceOder && {
          finalPrice: params.priceOder,
        }),
        ...(params.gender && {
          gender: params.gender,
        }),
        ...(params.priceRange && {
          price_gte: params.priceRange[0],
          price_lte: params.priceRange[1],
        }),
        ...(params.stock && {
          _sort: "stock",
          _order: params.stock,
        }),
        ...(params.sort && {
          _sort: params.sort.split(".")[1],
          _order: params.sort.split(".")[0],
        }),
        ...(params.type && {
          movement: params.type,
        }),
        ...(params.caseSize && {
          caseSize_gte: params.caseSize[0],
          caseSize_lte: params.caseSize[1],
        }),
        ...(params.glassMaterial && {
          glassMaterial: params.glassMaterial,
        }),
        ...(params.isNew && {
          isNew: params.isNew,
        }),
        ...(params.isDiscount && {
          isDiscount: params.isDiscount,
        }),
        ...(params.productId && {
          id: params.productId,
        }),
      },
    });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST_ADMIN),
      payload: {
        data: result.data,
        meta: {
          total: parseInt(result.headers["x-total-count"]),
          page: params.page,
          limit: params.limit,
        },
        more: more,
      },
    });
  } catch (e) {
    console.log(
      "🚀 ~ file: products.saga.js ~ line 73 ~ function*getProductListSaga ~ e",
      e
    );
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST_ADMIN),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

function* getNewProductsSaga(action) {
  try {
    const { params } = action.payload;
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        _expand: "category",
        _embed: "images",
        ...(params.isNew && {
          isNew: params.isNew,
        }),
      },
    });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_NEW_PRODUCTS_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_NEW_PRODUCTS_LIST),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id, gender } = action.payload;
    const result = yield axios.get(`http://localhost:4000/products/${id}`, {
      params: {
        _expand: "category",
        _embed: ["images", "wishlists", "comments"],
      },
    });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        data: result.data,
      },
    });

    yield put({
      type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_USER),
      payload: {
        params: {
          page: 1,
          limit: 999,
          gender: result.data.gender,
        },
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

function* createProductSaga(action) {
  try {
    const { data, callback, images } = action.payload;
    const result = yield axios.post("http://localhost:4000/products", data);
    for (let i = 0; i < images.length; i++) {
      yield axios.post("http://localhost:4000/images", {
        ...images[i],
        productId: result.data.id,
      });
    }

    yield put({
      type: SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: {
        data: result.data,
      },
    });
    yield callback.goToList();
  } catch (e) {
    console.log(
      "🚀 ~ file: products.saga.js ~ line 49 ~ function*createProductSaga ~ e",
      e
    );
    yield put({
      type: FAIL(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

function* updateProductSaga(action) {
  try {
    const { data, id, callback, images, initialImageIds } = action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/products/${id}`,
      data
    );

    for (let i = 0; i < images.length; i++) {
      if (!images[i].id) {
        yield axios.post("http://localhost:4000/images", {
          ...images[i],
          productId: result.data.id,
        });
      }
    }
    for (let j = 0; j < initialImageIds.length; j++) {
      const keepImage = images.find(
        (item) => item.id && item.id === initialImageIds[j]
      );
      console.log(
        "🚀 ~ file: products.saga.js ~ line 177 ~ function*updateProductSaga ~ keepImage",
        keepImage
      );
      if (!keepImage) {
        yield axios.delete(
          `http://localhost:4000/images/${initialImageIds[j]}`
        );
      }
    }

    yield put({
      type: SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT),
      payload: {
        data: result.data,
      },
    });
    yield callback.goToList();
  } catch (e) {
    console.log(
      "🚀 ~ file: products.saga.js ~ line 84 ~ function*updateProductSaga ~ e",
      e
    );
    yield put({
      type: FAIL(PRODUCT_ACTION.UPDATE_PRODUCT),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

function* deleteProductSaga(action) {
  try {
    const { id, params, callback } = action.payload;
    const result = yield axios.delete(`http://localhost:4000/products/${id}`);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT),
      payload: {
        data: result.data,
      },
    });

    yield put({
      type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_ADMIN),
      payload: {
        params: params,
      },
    });

    yield callback.closeModal();
  } catch (e) {
    console.log(
      "🚀 ~ file: products.saga.js ~ line 107 ~ function*deleteProductSaga ~ e",
      e
    );
    yield put({
      type: FAIL(PRODUCT_ACTION.DELETE_PRODUCT),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

export default function* productSaga() {
  yield debounce(
    500,
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_USER),
    getProductListUserSaga
  );
  yield debounce(
    500,
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST_ADMIN),
    getProductListAdminSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.GET_NEW_PRODUCTS_LIST),
    getNewProductsSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
    getProductDetailSaga
  );
  yield takeEvery(REQUEST(PRODUCT_ACTION.CREATE_PRODUCT), createProductSaga);
  yield takeEvery(REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT), updateProductSaga);
  yield takeEvery(REQUEST(PRODUCT_ACTION.DELETE_PRODUCT), deleteProductSaga);
}
