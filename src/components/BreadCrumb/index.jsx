import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Breadcrumb } from "antd";

import * as S from "./styles";

const BreadCrumb = ({ breadCrumbItems }) => {
  const renderBreadCrumbItem = useMemo(() => {
    return breadCrumbItems.map((item, index) => {
      return (
        <Breadcrumb.Item key={index}>
          <Link to={item.path}>{item.title}</Link>
        </Breadcrumb.Item>
      );
    });
  }, [breadCrumbItems]);

  return (
    <S.Wrapper>
      <Breadcrumb separator=">">{renderBreadCrumbItem}</Breadcrumb>
    </S.Wrapper>
  );
};

export default BreadCrumb;
