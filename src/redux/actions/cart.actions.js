import { createAction } from "@reduxjs/toolkit";

import { ADD_PRODUCT, REMOVE_PRODUCT } from "../CONSTANTS/cart.constant";

export const addProductAction = createAction(`${ADD_PRODUCT}_ACTION`);
export const removeProductAction = createAction(`${REMOVE_PRODUCT}_ACTION`);
