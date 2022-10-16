import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Select,
  Row,
  Col,
  Collapse,
  Checkbox,
  Button,
  Input,
  Space,
  Tag,
} from "antd";

import {
  getProductListAction,
  getCategoriesListAction,
} from "../../../redux/actions";
import { PRODUCT_LIST_LIMIT } from "../../../constants/paginations";

import * as S from "./style";

const { Option } = Select;
const { Panel } = Collapse;

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterParams, setFilterParams] = useState({
    categoryId: [],
    keyWord: "",
  });
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );

    dispatch(getCategoriesListAction());
  }, []);

  const handleShowMore = () => {
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          page: productList.meta.page + 1,
          limit: PRODUCT_LIST_LIMIT,
        },
        more: true,
      })
    );
  };
  const handleFilter = (key, values) => {
    setFilterParams({
      ...filterParams,
      [key]: values,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          [key]: values,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };
  const handleRemoveFilterCategory = (id) => {
    const newCategoryId = filterParams.categoryId.filter((item) => item !== id);
    setFilterParams({
      ...filterParams,
      categoryId: newCategoryId,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          categoryId: newCategoryId,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleRemoveFilterKeyWord = () => {
    setFilterParams({
      ...filterParams,
      keyWord: "",
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          keyWord: "",
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const renderCategory = () => {
    return categoryList.data.map((item) => {
      return (
        <Checkbox value={item.id} key={item.id}>
          {item.name}
        </Checkbox>
      );
    });
  };
  const renderFilterCategory = () => {
    return filterParams.categoryId.map((filterCategoryId) => {
      const filterCategoryName = categoryList.data.find(
        (item) => item.id === filterCategoryId
      );
      return (
        <Tag
          key={filterCategoryId}
          closable
          onClose={() => handleRemoveFilterCategory(filterCategoryId)}
        >
          {filterCategoryName.name}
        </Tag>
      );
    });
  };

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
          <S.ProductBrands>
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
          </S.ProductBrands>

          <Col span={4}>
            <div className="product_filter-wrapper">
              <p className="product_filter-title">Bộ lọc</p>

              <Collapse>
                <Panel header="Thương hiệu" key="1">
                  <Checkbox.Group
                    onChange={(value) => handleFilter("categoryId", value)}
                    value={filterParams.categoryId}
                  >
                    {renderCategory()}
                  </Checkbox.Group>
                </Panel>
              </Collapse>
            </div>
          </Col>

          <Col span={20}>
            <S.ProductsWrapper>
              <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                <Col span={16}>
                  <S.SearchBrandWrapper>
                    <input
                      type="text"
                      placeholder="Tìm tên thương hiệu"
                      onChange={(e) => handleFilter("keyWord", e.target.value)}
                      value={filterParams.keyWord}
                    />
                    <button>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </S.SearchBrandWrapper>
                </Col>
                <Space style={{ marginBottom: 16 }}></Space>
                <Col span={8}>
                  <Select style={{ width: "100%" }}></Select>
                </Col>
              </Row>
              <Space style={{ marginBottom: 16 }}>
                {renderFilterCategory()}
                {filterParams.keyWord && (
                  <Tag closable onClose={() => handleRemoveFilterKeyWord()}>
                    KeyWord: {filterParams.keyWord}
                  </Tag>
                )}
              </Space>
              <Row gutter={[8, 8]}>{renderProducts()}</Row>
              <Row style={{ justifyContent: "center" }}>
                <Button
                  style={{ marginTop: 16 }}
                  size="large"
                  onClick={() => handleShowMore()}
                >
                  Show More!
                </Button>
              </Row>
            </S.ProductsWrapper>
          </Col>
        </Row>
      </S.ProductPageWrapper>
    </main>
  );
};

export default ProductPage;
