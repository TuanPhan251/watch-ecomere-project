import { useNavigate } from "react-router-dom";

import { Select, Pagination, Row, Col, Button, Collapse, Checkbox } from "antd";
import { TreeSelect } from "antd";
import { useEffect, useState } from "react";

import * as S from "./styles";
import "../BrandPage/main.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesListAction,
  getProductListAction,
} from "../../redux/actions";
import { PRODUCT_LIST_LIMIT } from "../../constants/paginations";

const { Panel } = Collapse;
const { Option } = Select;
const { SHOW_PARENT } = TreeSelect;

const BrandPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const [value, setValue] = useState([]);
  const [filterParams, setFilterParams] = useState({
    filterCategoryId: "",
    filterKeyWord: "",
  });

  const onChange = (newValue) => {
    handleFilter("categoryId", newValue);
    setValue(newValue);
  };
  const treeData = categoryList.data.map((item) => {
    return {
      title: item.name,
      value: item.id,
      key: item.id,
    };
  });

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Các thương hiệu nổi tiếng",
    style: {
      width: "100%",
    },
  };

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
            <p>{item.price?.toLocaleString()}đ</p>
            <p>{item.category.name}</p>
          </S.ProductItem>
        </Col>
      );
    });
  };
  return (
    <main>
      <S.BrandPageWrapper>
        <div className="brand-container">
          <div className="brand-item">
            <img
              alt="Casio logo"
              src="https://cdn.tgdd.vn/Brand/1/Casio7264-b_39.jpg"
            />
          </div>
          <div className="brand-item">
            <img
              alt="Orient logo"
              src="https://cdn.tgdd.vn/Brand/1/ORIENTl-220x48.jpg"
            />
          </div>
          <div className="brand-item">
            <img
              alt="Citizen logo"
              src="https://cdn.tgdd.vn/Brand/1/Citizen7264-b_41.jpg"
            />
          </div>
          <div className="brand-item">
            <img
              alt="Anne logo"
              src="https://cdn.tgdd.vn/Brand/1/ANNEKLEINl-220x48.jpg"
            />
          </div>
          <div className="brand-item">
            <img
              alt="Tissot logo"
              src="https://cdn.tgdd.vn/Brand/1/MATHEYTISSOTl-220x48.jpg"
            />
          </div>
        </div>

        <S.TextBrandWrapper>
          <p className="text-content">
            "Một sản phẩm có thể lỗi thời nhanh chóng, nhưng một thương hiệu
            thành công sống mãi với thời gian"
          </p>
        </S.TextBrandWrapper>

        <S.SearchBrandWrapper>
          <input
            type="text"
            placeholder="Tìm tên thương hiệu"
            onChange={(e) => handleFilter("keyword", e.target.value)}
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </S.SearchBrandWrapper>

        <S.BrandFilterWrapper>
          <span>Bộ lọc: </span>
          <TreeSelect
            // onChange={(e) => handleFilterCategory(e.target.value)}
            {...tProps}
            style={{ width: 200, marginLeft: "8px" }}
          />
          <Select
            allowClear
            placeholder="Giá"
            style={{
              width: 120,
              marginLeft: "8px",
            }}
          >
            <Option value="low-high">Thấp - Cao</Option>
            <Option value="high-low">Cao - Thấp</Option>
          </Select>
          <Select
            allowClear
            placeholder="Loại máy"
            style={{
              width: 160,
              marginLeft: "8px",
            }}
          >
            <Option value="automatic">Cơ tự động(automatic)</Option>
            <Option value="pin">Dùng pin</Option>
          </Select>
          <Select
            allowClear
            placeholder="Đường kính mặt"
            style={{
              width: 160,
              marginLeft: "8px",
            }}
          >
            <Option value="36">Dưới 36mm</Option>
            <Option value="36-40">Từ 36mm - 40mm</Option>
            <Option value="40-44">Từ 40mm - 44mm</Option>
            <Option value="44">Trên 44mm</Option>
          </Select>
          <Select
            allowClear
            placeholder="Chất liệu kính"
            style={{
              width: 160,
              marginLeft: "8px",
            }}
          >
            <Option value="mineral">Kính khoáng</Option>
            <Option value="sapphire">Sapphire</Option>
          </Select>
        </S.BrandFilterWrapper>

        <S.ProductsWrapper>
          <Row gutter={[8, 8]}>{renderProducts()}</Row>

          <div className="button-container-1">
            <span className="mas">Show more!</span>
            <button
              id="work"
              type="button"
              name="Hover"
              onClick={() => handleShowMore()}
            >
              Show more!
            </button>
          </div>
        </S.ProductsWrapper>
      </S.BrandPageWrapper>
    </main>
  );
};

export default BrandPage;
