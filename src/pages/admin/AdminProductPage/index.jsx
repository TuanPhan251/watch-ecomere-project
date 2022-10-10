import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getCategoriesListAction,
  getProductListAction,
  createProductAction,
  updateProductAction,
  deleteProductAction,
} from "../../../redux/actions";

import * as S from "./style";

const AdminProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: 5,
        },
      })
    );
    dispatch(getCategoriesListAction());
  }, []);

  return <></>;
};

export default AdminProductPage;
