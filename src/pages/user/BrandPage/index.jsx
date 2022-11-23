import { useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation, generatePath, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  Select,
  Row,
  Col,
  Collapse,
  Checkbox,
  Space,
  Tag,
  Radio,
  Spin,
  Rate,
  Tooltip,
  Drawer,
  Slider,
  notification,
  Breadcrumb,
  Button,
} from "antd";

import {
  getProductListUserAction,
  getCategoriesListAction,
  addItemToCartAction,
  removeProductDetailAction,
} from "../../../redux/actions";
import { PRODUCT_LIST_LIMIT } from "../../../constants/paginations";
import { ROUTES } from "../../../constants/routes";
import { SLIDER_MARKS } from "./constants";

import brandBanner from "../../../assets/banner/brand-banner.jpg";

import * as S from "./styles";

var qs = require("qs");

const { Option } = Select;
const { Panel } = Collapse;
const caseSizes = [
  {
    RANGE: "",
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

const BrandPage = () => {
  const MAXPRICE = 15000000;
  const location = useLocation();
  const { category } = location.state ? location.state : {};
  const search = location.search.slice(1);
  const searchObj = qs.parse(search);

  const initialFilterParams = {
    categoryId: category ? [category.id] : [],
    keyword: "",
    priceSort: "",
    type: [],
    caseSize: "",
    nameCaseSize: "",
    glassMaterial: [],
    priceRange: [0, MAXPRICE],
    isNew: false,
    isDiscount: false,
  };

  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterParams, setFilterParams] = useState({ ...initialFilterParams });
  const { productListUser } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const { userInfo } = useSelector((state) => state.user);
  const { cartList } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(
      getProductListUserAction({
        params: {
          ...filterParams,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );

    dispatch(
      getCategoriesListAction({
        params: {
          page: 1,
          limit: 999,
        },
      })
    );

    setFilterParams({
      ...filterParams,
    });

    document.title = "Danh sách sản phẩm";

    navigate(location.pathname, {});
    return () => {
      dispatch(removeProductDetailAction());
    };
  }, []);

  const handleShowMore = () => {
    dispatch(
      getProductListUserAction({
        params: {
          ...filterParams,
          page: productListUser.meta.page + 1,
          limit: PRODUCT_LIST_LIMIT,
        },
        more: true,
      })
    );
  };

  const handleAddItemToCart = (product) => {
    if (userInfo.data.id) {
      dispatch(
        addItemToCartAction({
          product: {
            data: product,
          },
          productAmount: 1,
        })
      );
      notification.open({
        message: "Đã thêm sản phẩm vào giỏ hàng",
        placement: "top",
        top: 100,
        duration: 2,
        icon: (
          <i
            className="fa-solid fa-check"
            style={{
              color: "#73d13d",
            }}
          ></i>
        ),
      });
    } else {
      notification.error({
        message: "Bạn cần đăng nhập để sử dụng chức năng này",
        top: 80,
        duration: 2,
      });
    }
  };

  const handleFilter = (key, values) => {
    console.log(key, values);
    setFilterParams({
      ...filterParams,
      [key]: values,
    });
    dispatch(
      getProductListUserAction({
        params: {
          ...filterParams,
          [key]: values,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleResetFilterParams = () => {
    setFilterParams({ ...initialFilterParams });
    dispatch(
      getProductListUserAction({
        params: {
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );

    dispatch(getCategoriesListAction());
  };

  const handleRemoveFilterCaseSize = () => {
    setFilterParams({
      ...filterParams,
      caseSize: "",
    });

    dispatch(
      getProductListUserAction({
        params: {
          ...filterParams,
          caseSize: "",
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
      getProductListUserAction({
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
      getProductListUserAction({
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
      getProductListUserAction({
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
      getProductListUserAction({
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
          {filterCategoryName?.name || category.name}
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

  const renderFilterCasize = useMemo(() => {
    for (let i = 0; i < caseSizes.length; i++) {
      if (
        filterParams.caseSize === caseSizes[i].RANGE &&
        filterParams.caseSize !== ""
      )
        return (
          <Tag closable onClose={() => handleRemoveFilterCaseSize()}>
            {caseSizes[i].NAME}
          </Tag>
        );
    }
  }, [filterParams.caseSize]);

  const renderProducts = useMemo(() => {
    return productListUser.data.map((item) => {
      const haveComment = item.comments.length !== 0;
      const averageRating = haveComment
        ? item.comments.reduce((total, comment) => {
            return total + comment.rating;
          }, 0) / item.comments.length
        : undefined;
      const discountPercent = `-${item.discountPercent}%`;
      let price = item.price;
      if (item.isDiscount) {
        price = item.finalPrice;
      }

      const currentCartItem = cartList.find(
        (cartItem) => cartItem.id === item.id
      );

      return (
        <Col key={item.id} xxl={6} xl={6} md={8} sm={8} xs={12}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: `${item.slug}.${item.id}`,
            })}
          >
            <S.ProductItem>
              <div className="product_info-image">
                <img src={item.images[0].url} alt="item" />
                <div className="product_item-actions">
                  <Tooltip title="Thêm vào giỏ hàng">
                    <button
                      className="product_item-actions-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (item.stock <= currentCartItem?.totalAmount) {
                          return notification.warn({
                            message: "Sản phẩm đã tới giới hạn tồn kho",
                            placement: "top",
                            top: 100,
                          });
                        }
                        handleAddItemToCart(item);
                      }}
                    >
                      <i className="fa-solid fa-cart-plus"></i>
                    </button>
                  </Tooltip>
                </div>
              </div>

              <h2 className="product_info-name">{item.name}</h2>

              <div className="product_info-rating">
                <Rate
                  allowHalf
                  disabled
                  value={averageRating}
                  style={{ fontSize: 14 }}
                />
                {haveComment && <span>({item.comments?.length} đánh giá)</span>}
              </div>

              <p className="product_info-price-final">
                {price.toLocaleString()}
                <sup>₫</sup>
              </p>
              {item.isDiscount && (
                <p className="product_info-price-original">
                  {item.price.toLocaleString()}
                  <sup>₫</sup>
                </p>
              )}

              {item.isDiscount && (
                <div className="product_info-discount-label">
                  <span>{discountPercent}</span>
                </div>
              )}
              {item.isNew && (
                <div className="product_info-isNew-label">
                  <span>Mới</span>
                </div>
              )}
            </S.ProductItem>
          </Link>
        </Col>
      );
    });
  }, [productListUser.data, cartList]);

  const renderPageBanner = useMemo(() => {
    return (
      <>
        <img alt="" src={brandBanner} />

        <h2>Sản phẩm</h2>

        <div className="overlay"></div>
      </>
    );
  }, [brandBanner]);

  return (
    <S.Wrapper>
      <S.PageBannerWrapper>{renderPageBanner}</S.PageBannerWrapper>

      <S.BreadcrumbWrapper>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={ROUTES.USER.HOME}>Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <p>Sản phẩm</p>
          </Breadcrumb.Item>
        </Breadcrumb>
      </S.BreadcrumbWrapper>

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
              <h3>Loại sản phẩm</h3>
              <Col span={24}>
                <Checkbox
                  checked={filterParams.isNew}
                  onChange={(e) => handleFilter("isNew", e.target.checked)}
                >
                  Sản phẩm mới
                </Checkbox>
              </Col>
              <Col span={24}>
                <Checkbox
                  checked={filterParams.isDiscount}
                  onChange={(e) => handleFilter("isDiscount", e.target.checked)}
                >
                  Đang giảm giá
                </Checkbox>
              </Col>
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
            <button onClick={() => handleResetFilterParams()}>
              Xóa bộ lọc
            </button>
          </S.MobileFilterAction>
        </Drawer>
      </S.MobileFilterDrawer>

      <S.ProductPageWrapper>
        <Row gutter={8}>
          <Col xxl={6} xl={6} md={6} sm={0} xs={0}>
            <div className="product_filter-wrapper">
              <p className="product_filter-title">
                <i className="fa-solid fa-filter"></i>Bộ lọc
              </p>

              <Collapse
                ghost
                bordered={false}
                defaultActiveKey={["1", "2", "3", "4", "5", "6", "7"]}
                style={{
                  fontSize: 16,
                }}
              >
                <Panel header="Khoảng giá" key="7">
                  <Slider
                    range
                    marks={SLIDER_MARKS}
                    step={100000}
                    max={MAXPRICE}
                    defaultValue={filterParams.priceRange}
                    onAfterChange={(value) => handleFilter("priceRange", value)}
                  />
                </Panel>
                <Panel header="Thương hiệu" key="1">
                  <Checkbox.Group
                    onChange={(value) => handleFilter("categoryId", value)}
                    value={filterParams.categoryId}
                  >
                    <Row>{renderCategory}</Row>
                  </Checkbox.Group>
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
                    onChange={(e) => handleFilter("caseSize", e.target.value)}
                    value={filterParams.caseSize}
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
                <Panel header="Loại sản phẩm" key="6">
                  <Col span={24}>
                    <Row>
                      <Checkbox
                        checked={filterParams.isNew}
                        onChange={(e) =>
                          handleFilter("isNew", e.target.checked)
                        }
                      >
                        Sản phẩm mới
                      </Checkbox>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <Row>
                      <Checkbox
                        checked={filterParams.isDiscount}
                        onChange={(e) =>
                          handleFilter("isDiscount", e.target.checked)
                        }
                      >
                        Đang giảm giá
                      </Checkbox>
                    </Row>
                  </Col>
                </Panel>
              </Collapse>

              <div className="product_filter-actions">
                <button onClick={() => handleResetFilterParams()}>
                  Xóa bộ lọc
                </button>
              </div>
            </div>
          </Col>

          <Col xxl={18} xl={18} md={18} sm={24} xs={24}>
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

                {renderFilterCasize}

                {renderFilterGlass}
              </Space>

              <Spin spinning={productListUser.loading}>
                <div
                  className="product_items-wrapper"
                  style={{ minHeight: "50vh" }}
                >
                  <Row gutter={[8, 8]}>{renderProducts}</Row>
                </div>
              </Spin>

              {productListUser.data.length !== productListUser.meta.total && (
                <Row style={{ justifyContent: "center" }}>
                  <Button
                    type="primary"
                    loading={productListUser.loading}
                    style={{ marginTop: 16, fontSize: 16 }}
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

export default BrandPage;
