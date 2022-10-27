import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import { ROUTES } from "../../constants/routes";

import * as S from "./styles";

const routes = [
  {
    path: ROUTES.USER.HOME,
    breadcrumbName: "Trang chủ",
  },
  {
    path: ROUTES.USER.GENDER_DETAIL,
    breadcrumbName: "Đồng hồ nam",
  },
  {
    path: ROUTES.USER.GENDER_DETAIL,
    breadcrumbName: "Đồng hồ nữ",
  },
];
function itemRender(route, params, routes, paths) {
  console.log("🚀 ~ file: index.jsx ~ line 23 ~ itemRender ~ params", params);
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
  );
}

const BreadcrumbComponent = () => {
  return <Breadcrumb itemRender={itemRender} routes={routes} />;
};

export default BreadcrumbComponent;
