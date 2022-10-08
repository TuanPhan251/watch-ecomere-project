import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Space, Badge } from "antd";

import CartDrawer from "./Cart";

import logo from "../../../assets/logo/logo.png";
import * as S from "./style";
import { ROUTES } from "../../../constants/routes";

const Header = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);

  const itemsAmount = cartList.reduce((prev, item) => {
    return prev + item.totalAmount;
  }, 0);

  return (
    <S.HeaderContainer>
      <S.HeaderLogo>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </S.HeaderLogo>
      <S.HeaderNav>
        <li>
          <S.DropDownMenuWrapperTH>
            <Link to={ROUTES.BRAND} className="title-link">
              THƯƠNG HIỆU
              <div className="dropdown-container">
                <div className="dropdown-content">
                  <div>
                    <p
                      style={{
                        marginBottom: 10,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      CÁC HÃNG BÁN CHẠY
                    </p>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Daniel Wellington
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Casio
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Seiko
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Saga
                        </S.ItemLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p
                      style={{
                        marginBottom: 10,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      KHUYÊN DÙNG
                    </p>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Daniel Wellington
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Casio
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Seiko
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Saga
                        </S.ItemLink>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p
                      style={{
                        marginBottom: 10,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      CÁC DÒNG ĐẶC BIỆT
                    </p>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Daniel Wellington
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Casio
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Seiko
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Saga
                        </S.ItemLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </S.DropDownMenuWrapperTH>
        </li>
        <li>
          <S.DropDownMenuWrapperTH>
            <Link to={ROUTES.MEN_DETAIL} className="title-link">
              ĐỒNG HỒ NAM
              <div className="dropdown-container">
                <div className="dropdown-content">
                  <div>
                    <p
                      style={{
                        marginBottom: 10,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      CÁC HÃNG BÁN CHẠY
                    </p>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Daniel Wellington
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Casio
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Seiko
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Saga
                        </S.ItemLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p
                      style={{
                        marginBottom: 10,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      KHUYÊN DÙNG
                    </p>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Daniel Wellington
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Casio
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Seiko
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Saga
                        </S.ItemLink>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p
                      style={{
                        marginBottom: 10,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      CÁC DÒNG ĐẶC BIỆT
                    </p>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Daniel Wellington
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Casio
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Seiko
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Saga
                        </S.ItemLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </S.DropDownMenuWrapperTH>
        </li>
        <li>
          <S.DropDownMenuWrapperTH>
            <Link to={ROUTES.WOMEN_DETAIL} className="title-link">
              ĐỒNG HỒ NỮ
              <div className="dropdown-container">
                <div className="dropdown-content">
                  <div>
                    <p
                      style={{
                        marginBottom: 10,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      CÁC HÃNG BÁN CHẠY
                    </p>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Daniel Wellington
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Casio
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Seiko
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Saga
                        </S.ItemLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p
                      style={{
                        marginBottom: 10,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      KHUYÊN DÙNG
                    </p>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Daniel Wellington
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Casio
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Seiko
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Saga
                        </S.ItemLink>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p
                      style={{
                        marginBottom: 10,
                        fontSize: 16,
                        fontWeight: 600,
                      }}
                    >
                      CÁC DÒNG ĐẶC BIỆT
                    </p>
                    <ul className="dropdown-list">
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Daniel Wellington
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Casio
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Seiko
                        </S.ItemLink>
                      </li>
                      <li className="dropdown-item">
                        <S.ItemLink style={{ padding: 0 }} to="/">
                          <i
                            className="fa-solid fa-chevron-right"
                            style={{ marginRight: 3 }}
                          />
                          Saga
                        </S.ItemLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          </S.DropDownMenuWrapperTH>
        </li>
        <li>
          <Link to={ROUTES.CONTACT}>LIÊN HỆ</Link>
        </li>
      </S.HeaderNav>

      <S.HeaderSearchContainer>
        <input type="text" placeholder="Tìm sản phẩm" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </S.HeaderSearchContainer>

      <S.HeaderRight>
        <Space>
          <Link>
            <span>ĐĂNG NHẬP</span>
          </Link>

          <S.HeaderCart>
            <Badge count={itemsAmount}>
              <i
                className="fa-solid fa-cart-shopping"
                onClick={() => navigate(`/gio-hang`)}
              ></i>
            </Badge>

            <S.CartItemsWrapper>
              <CartDrawer cartList={cartList} />
            </S.CartItemsWrapper>
          </S.HeaderCart>
        </Space>
      </S.HeaderRight>
    </S.HeaderContainer>
  );
};

export default Header;
