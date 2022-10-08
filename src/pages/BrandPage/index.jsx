import { useNavigate } from "react-router-dom";

import { Select, Pagination, Row, Col } from "antd";
import { TreeSelect } from "antd";
import { useState } from "react";

import menProducts from "../../assets/fakedata/products/men";

import ScrollTopButton from "../../components/ScrollTopButton";

import Footer from "../../components/Layouts/Footer";
import Header from "../../components/Layouts/Header";
import * as S from "./styles";

const { Option } = Select;
const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: "Casio",
    value: "0-0",
    key: "0-0",
  },
  {
    title: "Orient",
    value: "0-1",
    key: "0-1",
  },
  {
    title: "Citizen",
    value: "0-2",
    key: "0-2",
  },
  {
    title: "Anne Klein",
    value: "0-3",
    key: "0-3",
  },
  {
    title: "Mathey-Tissot",
    value: "0-4",
    key: "0-4",
  },
];

const BrandPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState([]);

  const onChange = (newValue) => {
    setValue(newValue);
  };

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

  const renderProducts = () => {
    return menProducts.map((item) => {
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
            <p>{item.category}</p>
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
          <input type="text" placeholder="Tìm tên thương hiệu" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </S.SearchBrandWrapper>

        <S.BrandFilterWrapper>
          <span>Bộ lọc: </span>
          <TreeSelect {...tProps} style={{ width: 200, marginLeft: "8px" }} />
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
          <Row gutter={[4, 4]}>
            {renderProducts()}
            {renderProducts()}
            {renderProducts()}
            {renderProducts()}
          </Row>
        </S.ProductsWrapper>

        <Pagination
          defaultCurrent={1}
          total={50}
          style={{
            padding: "24px 0",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </S.BrandPageWrapper>
    </main>
  );
};

export default BrandPage;
