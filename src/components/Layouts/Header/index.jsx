import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Space, Badge, Drawer } from "antd";

import CartDrawer from "./Cart";

import logo from "../../../assets/logo/logo.png";
import * as S from "./style";
import { ROUTES } from "../../../constants/routes";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);
  const { cartList } = useSelector((state) => state.cart);
  const [headerBgrColor, setHeaderBgrColor] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleChangeHeaderBgrColor = () => {
    window.scrollY > 80 ? setHeaderBgrColor(true) : setHeaderBgrColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeHeaderBgrColor);

    return () => {
      window.removeEventListener("scroll", handleChangeHeaderBgrColor);
    };
  }, []);

  const itemsAmount = cartList.reduce((prev, item) => {
    return prev + item.totalAmount;
  }, 0);

  return (
    <S.HeaderContainer backgroundColor={headerBgrColor}>
      <S.HeaderNavMobile>
        <div className="mobile-header_icon" onClick={() => setShowDrawer(true)}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <Drawer
          closable={true}
          placement="left"
          onClose={() => setShowDrawer(false)}
          open={showDrawer}
          contentWrapperStyle={{ width: "100%" }}
          headerStyle={{
            position: "absolute",
            right: "-20px",
            top: 0,
            border: "none",
          }}
        >
          <S.HeaderNavMobileList>
            <li onClick={() => setShowDrawer(false)}>
              <Link to={ROUTES.BRAND}>THƯƠNG HIỆU</Link>
            </li>
            <li onClick={() => setShowDrawer(false)}>
              <Link to={ROUTES.MEN_DETAIL}>NAM</Link>
            </li>
            <li onClick={() => setShowDrawer(false)}>
              <Link to={ROUTES.WOMEN_DETAIL}>NỮ</Link>
            </li>
            <li onClick={() => setShowDrawer(false)}>
              <Link to={ROUTES.CONTACT}>LIÊN HỆ</Link>
            </li>
          </S.HeaderNavMobileList>
        </Drawer>
      </S.HeaderNavMobile>

      <S.HeaderLogo>
        <Link to="/">
          <h2>GAIDA</h2>
        </Link>
      </S.HeaderLogo>

      <S.HeaderNav>
        <li>
          <S.DropDownMenuWrapperTH>
            <Link to={ROUTES.USER.BRAND} className="title-link">
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
            <Link to={ROUTES.USER.MEN_DETAIL} className="title-link">
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
            <Link to={ROUTES.USER.WOMEN_DETAIL} className="title-link">
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
          <Link to={ROUTES.USER.CONTACT}>LIÊN HỆ</Link>
        </li>
      </S.HeaderNav>

      <S.HeaderRight>
        <Space>
          <p className="userName">Welcome {userInfo.data.userName}</p>
          <Link to={ROUTES.LOGIN}>
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
