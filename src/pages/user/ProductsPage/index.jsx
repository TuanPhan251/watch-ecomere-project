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
  Radio,
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
    keyword: "",
    priceSort: "",
    type: [],
    caseSize: "",
    nameCaseSize: "",
    glassMaterial: [],
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

  const handleFilterCaseSize = (key, values, nameCaseSize) => {
    if (values) {
      var newValue = values.split(",").map(Number);
    }
    setFilterParams({
      ...filterParams,
      [key]: newValue,
      nameCaseSize: nameCaseSize,
    });
    console.log(filterParams.caseSize);

    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          [key]: newValue,
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

  const handleRemoveFilterGlass = (filterGlass) => {
    const newGlass = filterParams.glassMaterial.filter(
      (item) => item !== filterGlass
    );

    setFilterParams({
      ...filterParams,
      glassMaterial: newGlass,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          glassMaterial: newGlass,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleRemoveFilterType = (filterType) => {
    const newType = filterParams.type.filter((item) => item !== filterType);

    setFilterParams({
      ...filterParams,
      type: newType,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          type: newType,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleRemoveFilterKeyWord = (key) => {
    setFilterParams({
      ...filterParams,
      [key]: "",
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          [key]: "",
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const renderCategory = () => {
    return categoryList.data.map((item) => {
      return (
        <Col span={24} key={item.id}>
          <Checkbox value={item.id}>{item.name}</Checkbox>
        </Col>
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

  const renderFilterType = () => {
    return filterParams.type.map((filterType) => {
      return (
        <Tag
          key={filterType}
          closable
          onClose={() => handleRemoveFilterType(filterType)}
        >
          {filterType}
        </Tag>
      );
    });
  };

  const renderFilterGlass = () => {
    return filterParams.glassMaterial.map((filterGlass) => {
      return (
        <Tag
          key={filterGlass}
          closable
          onClose={() => handleRemoveFilterGlass(filterGlass)}
        >
          {filterGlass}
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
                    <Row>{renderCategory()}</Row>
                  </Checkbox.Group>
                </Panel>
                <Panel header="Loại máy" key="2">
                  <Checkbox.Group
                    onChange={(value) => handleFilter("type", value)}
                    value={filterParams.type}
                  >
                    <Col span={24}>
                      <Row>
                        <Checkbox value="Pin">Pin</Checkbox>
                      </Row>
                      <Row>
                        <Checkbox value="Automatic">Tự động</Checkbox>
                      </Row>
                    </Col>
                  </Checkbox.Group>
                </Panel>
                <Panel header="Đường kính mặt" key="3">
                  <Radio.Group
                    onChange={(e) =>
                      handleFilterCaseSize(
                        "caseSize",
                        e.target.value,
                        e.target.name
                      )
                    }
                    // value={filterParams.caseSize}
                  >
                    <Radio value={undefined}>Tất cả các kích thước</Radio>
                    <Radio value="0,35.99" name="Dưới 36mm">
                      Dưới 36mm
                    </Radio>
                    <Radio value="36,40.99" name="Từ 36mm - 40mm">
                      Từ 36mm - 40mm
                    </Radio>
                    <Radio value="41,44.99" name="Từ 41mm - 44mm">
                      Từ 41mm - 44mm
                    </Radio>
                    <Radio value="45,100" name="Trên 44mm">
                      Trên 44mm
                    </Radio>
                  </Radio.Group>
                </Panel>
                <Panel header="Chất liệu kính" key="4">
                  <Checkbox.Group
                    onChange={(value) => handleFilter("glassMaterial", value)}
                    value={filterParams.glassMaterial}
                  >
                    <Col span={24}>
                      <Row>
                        <Checkbox value="Mineral Glass">Kính khoáng</Checkbox>
                      </Row>
                      <Row>
                        <Checkbox value="sapphire">Sapphire</Checkbox>
                      </Row>
                    </Col>
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
                      onChange={(e) => handleFilter("keyword", e.target.value)}
                      value={filterParams.keyword}
                    />
                    <button>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </S.SearchBrandWrapper>
                </Col>
                <Space style={{ marginBottom: 16 }}></Space>
                <Col span={8}>
                  <Select
                    allowClear
                    placeholder="Giá"
                    style={{
                      width: "100%",
                    }}
                    onChange={(value) => handleFilter("priceSort", value)}
                  >
                    <Option value="asc">Thấp - Cao</Option>
                    <Option value="desc">Cao - Thấp</Option>
                  </Select>
                </Col>
              </Row>
              <Space style={{ marginBottom: 16 }}>
                {renderFilterCategory()}
                {filterParams.keyword && (
                  <Tag
                    closable
                    onClose={() => handleRemoveFilterKeyWord("keyword")}
                  >
                    KeyWord: {filterParams.keyword}
                  </Tag>
                )}
                {renderFilterType()}
                {filterParams.caseSize && (
                  <Tag
                    closable
                    // onClose={() => handleRemoveFilterKeyWord("caseSize")}
                  >
                    CaseSize: {filterParams.keyword}
                  </Tag>
                )}
                {renderFilterGlass()}
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
