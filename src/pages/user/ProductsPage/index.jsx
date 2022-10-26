import { useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation, generatePath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Select,
  Row,
  Col,
  Collapse,
  Checkbox,
  Button,
  Space,
  Tag,
  Radio,
  Spin,
  Rate,
  Tooltip,
  Drawer,
} from "antd";

import {
  getProductListAction,
  getCategoriesListAction,
} from "../../../redux/actions";
import { PRODUCT_LIST_LIMIT } from "../../../constants/paginations";
import { ROUTES } from "../../../constants/routes";

import menBanner from "../../../assets/banner/men-banner.jpg";
import womenBanner from "../../../assets/banner/women-banner.jpg";

import * as S from "./style";

const { Option } = Select;
const { Panel } = Collapse;
const caseSizes = [
  {
    RANGE: undefined,
    NAME: "Tất cả các kích thước",
  },
  {
    RANGE: "0,35.99",
    NAME: "Dưới 36mm",
  },
  {
    RANGE: "36,40",
    NAME: "Từ 36mm - 40mm",
  },
  {
    RANGE: "40.01,44",
    NAME: "Từ 40mm - 44mm",
  },
  {
    RANGE: "44.01,100",
    NAME: "Trên 44mm",
  },
];

const ProductPage = () => {
  const location = useLocation();
  const { title, gender } = location.state;
  const bannerImg = gender === "male" ? menBanner : womenBanner;

  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

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
    gender: gender,
  });
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
          gender: gender,
        },
      })
    );

    dispatch(getCategoriesListAction());

    setFilterParams({
      categoryId: [],
      keyword: "",
      priceSort: "",
      type: [],
      caseSize: "",
      nameCaseSize: "",
      glassMaterial: [],
      gender: gender,
    });
  }, [gender]);

  const handleNavigate = (value) => {
    if (value === "female") {
      navigate(ROUTES.USER.WOMEN_DETAIL, {
        state: {
          title: "Nữ",
          gender: "female",
        },
      });
    } else {
      navigate(ROUTES.USER.MEN_DETAIL, {
        state: {
          title: "Nam",
          gender: "male",
        },
      });
    }
  };

  const handleShowMore = () => {
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          page: productList.meta.page + 1,
          limit: PRODUCT_LIST_LIMIT,
          gender: gender,
        },
        more: true,
      })
    );
  };

  const handleFilter = (key, values) => {
    console.log(key);
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
          gender: gender,
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

    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          [key]: newValue,
          page: 1,
          gender: gender,
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

  const renderCaseSize = useMemo(() => {
    return caseSizes.map((item) => {
      return (
        <Radio key={item.NAME} value={item.RANGE} className={item.NAME}>
          {item.NAME}
        </Radio>
      );
    });
  }, [caseSizes]);

  const renderCategory = useMemo(() => {
    return categoryList.data?.map((item) => {
      return (
        <Col span={24} key={item.id}>
          <Checkbox value={item.id}>{item.name}</Checkbox>
        </Col>
      );
    });
  }, [categoryList.data]);

  const renderFilterCategory = useMemo(() => {
    return filterParams.categoryId?.map((filterCategoryId) => {
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
  }, [filterParams.categoryId]);

  const renderFilterType = useMemo(() => {
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
  }, [filterParams.type]);

  const renderFilterGlass = useMemo(() => {
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
  }, [filterParams.glassMaterial]);

  const renderProducts = useMemo(() => {
    return productList.data.map((item) => {
      const isDiscount = !!item.discountPercent;
      const discountPercent = `-${item.discountPercent}%`;
      let price = item.price;
      if (isDiscount) {
        price = item.finalPrice;
      }

      return (
        <Col
          key={item.id}
          xxl={4}
          xl={6}
          md={8}
          sm={8}
          xs={12}
          onClick={() =>
            navigate(
              generatePath(ROUTES.USER.PRODUCT_DETAIL, {
                id: `${item.slug}.${item.id}`,
              })
            )
          }
        >
          <S.ProductItem>
            <div className="product_info-image">
              <img src={item.image} alt="item" />
              <div className="product_item-actions">
                <Tooltip title="Thêm vào giỏ hàng">
                  <button
                    className="product_item-actions-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                  </button>
                </Tooltip>
                <Tooltip
                  title="Thêm vào danh sách yêu thích"
                  placement="bottom"
                >
                  <button
                    className="product_item-actions-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </Tooltip>
              </div>
            </div>

            <h2 className="product_info-name">{item.name}</h2>

            <div className="product_info-rating">
              <Rate
                allowHalf
                disabled
                defaultValue={4.5}
                style={{ fontSize: 14 }}
              />
              <span>(12 đánh giá)</span>
            </div>

            <p className="product_info-price-final">
              {price.toLocaleString()}
              <sup>₫</sup>
            </p>
            {isDiscount && (
              <p className="product_info-price-original">
                {item.price.toLocaleString()}
                <sup>₫</sup>
              </p>
            )}

            {isDiscount && (
              <div className="product_info-discount-label">
                <span>{discountPercent}</span>
              </div>
            )}
          </S.ProductItem>
        </Col>
      );
    });
  }, [productList.data]);

  const renderPageBanner = useMemo(() => {
    return (
      <>
        <img alt="" src={bannerImg} />

        <h2>Đồng hồ {title}</h2>

        <div className="overlay"></div>
      </>
    );
  }, [bannerImg, title]);

  return (
    <S.Wrapper>
      <S.PageBannerWrapper>{renderPageBanner}</S.PageBannerWrapper>

      <S.MobileFilterDrawer>
        <Drawer
          title="Bộ lọc sản phẩm"
          placement="right"
          contentWrapperStyle={{ width: 300 }}
          bodyStyle={{ padding: 16 }}
          open={showFilterDrawer}
          onClose={() => setShowFilterDrawer(false)}
        >
          <S.MobileFilterList className="mobile_filter-list">
            <li className="mobile_filter-item">
              <h3>Hãng</h3>
              <Checkbox.Group
                onChange={(value) => handleFilter("categoryId", value)}
                value={filterParams.categoryId}
              >
                <Row>{renderCategory}</Row>
              </Checkbox.Group>
            </li>
            <li className="mobile_filter-item">
              <h3>Giới tính</h3>
              <Radio.Group
                value={filterParams.gender}
                onChange={(e) => handleNavigate(e.target.value)}
              >
                <Radio value="male">Nam</Radio>
                <Radio value="female">Nữ</Radio>
              </Radio.Group>
            </li>
            <li className="mobile_filter-item">
              <h3>Loại máy</h3>{" "}
              <Checkbox.Group
                onChange={(value) => handleFilter("type", value)}
                value={filterParams.type}
              >
                <Checkbox value="Pin">Pin</Checkbox>
                <Checkbox value="Automatic">Tự động</Checkbox>
              </Checkbox.Group>
            </li>
            <li className="mobile_filter-item">
              <h3>Đường kính</h3>
              {renderCaseSize}
            </li>
            <li className="mobile_filter-item">
              <h3>Chất liệu kính</h3>{" "}
              <Checkbox.Group
                onChange={(value) => handleFilter("glassMaterial", value)}
                value={filterParams.glassMaterial}
              >
                <Checkbox value="Mineral glass">Kính khoáng</Checkbox>

                <Checkbox value="Sapphire">Sapphire</Checkbox>
              </Checkbox.Group>
            </li>
          </S.MobileFilterList>

          <S.MobileFilterAction>
            <button>Xóa bộ lọc</button>
          </S.MobileFilterAction>
        </Drawer>
      </S.MobileFilterDrawer>

      <S.ProductPageWrapper>
        <Row>
          <Col xxl={4} xl={4} md={6} sm={0} xs={0}>
            <div className="product_filter-wrapper">
              <p className="product_filter-title">
                <i className="fa-solid fa-filter"></i>Bộ lọc
              </p>

              <Collapse
                ghost
                bordered={false}
                defaultActiveKey={["1", "2", "3", "4", "5"]}
                style={{
                  fontSize: 16,
                }}
              >
                <Panel header="Thương hiệu" key="1">
                  <Checkbox.Group
                    onChange={(value) => handleFilter("categoryId", value)}
                    value={filterParams.categoryId}
                  >
                    <Row>{renderCategory}</Row>
                  </Checkbox.Group>
                </Panel>

                <Panel header="Giới tính" key="2">
                  <Radio.Group
                    value={filterParams.gender}
                    onChange={(e) => handleNavigate(e.target.value)}
                  >
                    <Col span={24}>
                      <Row>
                        <Radio value="male">Nam</Radio>
                      </Row>
                      <Row>
                        <Radio value="female">Nữ</Radio>
                      </Row>
                    </Col>
                  </Radio.Group>
                </Panel>

                <Panel
                  header="Loại máy"
                  key="3"
                  style={{
                    fontSize: 16,
                  }}
                >
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

                <Panel header="Đường kính mặt" key="4">
                  <Radio.Group
                    onChange={(e) =>
                      handleFilterCaseSize("caseSize", e.target.value)
                    }
                    // value={filterParams.caseSize}
                  >
                    {renderCaseSize}
                  </Radio.Group>
                </Panel>
                <Panel header="Chất liệu kính" key="5">
                  <Checkbox.Group
                    onChange={(value) => handleFilter("glassMaterial", value)}
                    value={filterParams.glassMaterial}
                  >
                    <Col span={24}>
                      <Row>
                        <Checkbox value="Mineral glass">Kính khoáng</Checkbox>
                      </Row>
                      <Row>
                        <Checkbox value="Sapphire">Sapphire</Checkbox>
                      </Row>
                    </Col>
                  </Checkbox.Group>
                </Panel>
              </Collapse>
            </div>
          </Col>

          <Col xxl={20} xl={20} md={18} sm={24} xs={24}>
            <S.ProductsWrapper>
              <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                <Col xxl={16} xl={16} md={24} sm={24} xs={24}>
                  <S.SearchBrandWrapper>
                    <input
                      type="text"
                      placeholder="Nhập để tìm sản phẩm"
                      onChange={(e) => handleFilter("keyword", e.target.value)}
                      value={filterParams.keyword}
                    />
                  </S.SearchBrandWrapper>
                </Col>
                <Col xxl={8} xl={8} md={24} sm={24} xs={24}>
                  <S.HeadingFilterWrapper>
                    <span
                      style={{
                        fontSize: 16,
                      }}
                    >
                      Sắp xếp theo:{" "}
                    </span>
                    <Select
                      allowClear
                      placeholder="Giá"
                      style={{
                        marginLeft: 8,
                        width: "40%",
                      }}
                      onChange={(value) => handleFilter("priceSort", value)}
                    >
                      <Option value="asc">Giá: Thấp - Cao</Option>
                      <Option value="desc">Giá: Cao - Thấp</Option>
                    </Select>

                    <button
                      className="mobile_filter-show-btn"
                      onClick={() => setShowFilterDrawer(true)}
                    >
                      <i className="fa-solid fa-filter"></i>
                      Bộ lọc
                    </button>
                  </S.HeadingFilterWrapper>
                </Col>
              </Row>
              <Space style={{ marginBottom: 16 }}>
                {renderFilterCategory}
                {filterParams.keyword && (
                  <Tag
                    closable
                    onClose={() => handleRemoveFilterKeyWord("keyword")}
                  >
                    KeyWord: {filterParams.keyword}
                  </Tag>
                )}
                {renderFilterType}

                {filterParams.caseSize && (
                  <Tag
                    closable
                    // onClose={() => handleRemoveFilterKeyWord("caseSize")}
                  >
                    CaseSize: {filterParams.nameCaseSize}
                  </Tag>
                )}
                {renderFilterGlass}
              </Space>

              <Spin spinning={productList.loading}>
                <Row gutter={[8, 8]}>{renderProducts}</Row>
              </Spin>

              {productList.data.length !== productList.meta.total && (
                <Row style={{ justifyContent: "center" }}>
                  <Button
                    style={{ marginTop: 16 }}
                    size="large"
                    onClick={() => handleShowMore()}
                  >
                    Xem thêm
                  </Button>
                </Row>
              )}
            </S.ProductsWrapper>
          </Col>
        </Row>
      </S.ProductPageWrapper>
    </S.Wrapper>
  );
};

export default ProductPage;
