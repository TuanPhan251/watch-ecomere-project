import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Select, Row, Col, Collapse, Checkbox } from "antd";

import {
  getProductListAction,
  getCategoriesListAction,
} from "../../redux/actions";
import { PRODUCT_LIST_LIMIT } from "../../constants/paginations";

import * as S from "./style";

const { Option } = Select;
const { Panel } = Collapse;

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: 10,
        },
      })
    );

    dispatch(getCategoriesListAction());
  }, []);

  const renderProducts = () => {
    return productList.data.map((item) => {
      return (
        <Col
          key={item.id}
          xl={4}
          md={6}
          sm={8}
          xm={12}
          onClick={() => navigate(`/san-pham/${item.id}`)}
        >
          <S.ProductItem>
            <img src={item.image} alt="item" />
            <h2>{item.name}</h2>
            <p>{item.price.toLocaleString()}đ</p>
            <p>{item.category.name}</p>
          </S.ProductItem>
        </Col>
      );
    });
  };

  return (
    <main>
      <S.ProductPageWrapper>
        <Row>
          {/* <S.ProductBrands>
          <S.ProductBrandItem>
            <img
              alt="Casio logo"
              src="https://cdn.tgdd.vn/Brand/1/Casio7264-b_39.jpg"
            />
          </S.ProductBrandItem>
          <S.ProductBrandItem>
            <img
              alt="Orient logo"
              src="https://cdn.tgdd.vn/Brand/1/ORIENTl-220x48.jpg"
            />
          </S.ProductBrandItem>
          <S.ProductBrandItem>
            <img
              alt="Citizen logo"
              src="https://cdn.tgdd.vn/Brand/1/Citizen7264-b_41.jpg"
            />
          </S.ProductBrandItem>
          <S.ProductBrandItem>
            <img
              alt="Anne logo"
              src="https://cdn.tgdd.vn/Brand/1/ANNEKLEINl-220x48.jpg"
            />
          </S.ProductBrandItem>
          <S.ProductBrandItem>
            <img
              alt="Tissot logo"
              src="https://cdn.tgdd.vn/Brand/1/MATHEYTISSOTl-220x48.jpg"
            />
          </S.ProductBrandItem>
        </S.ProductBrands> */}

          <Col span={4}>
            <div className="product_filter-wrapper">
              <p className="product_filter-title">Bộ lọc</p>

              <Collapse>
                <Panel header="Thương hiệu" key="1">
                  <Checkbox>Casio</Checkbox>
                  <Checkbox>Orient</Checkbox>
                  <Checkbox>Citizen</Checkbox>
                  <Checkbox>Anne-Klein</Checkbox>
                  <Checkbox>Tissot</Checkbox>
                </Panel>

                <Panel header="Giới tính" key="2">
                  <Checkbox>Nam</Checkbox>
                  <Checkbox>Nữ</Checkbox>
                </Panel>
              </Collapse>
            </div>
          </Col>

          <Col span={20}>
            <S.ProductsWrapper>
              <Row gutter={[8, 8]}>{renderProducts()}</Row>
            </S.ProductsWrapper>
          </Col>
        </Row>
      </S.ProductPageWrapper>
    </main>
  );
};

export default ProductPage;
