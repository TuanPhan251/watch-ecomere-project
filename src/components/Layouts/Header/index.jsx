import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Space, Badge, Drawer, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import CartDrawer from "./Cart";

import * as S from "./style";
import { ROUTES } from "../../../constants/routes";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);
  const { cartList } = useSelector((state) => state.cart);
  const [showDrawer, setShowDrawer] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
  };

  const itemsAmount = cartList.length;

  return (
    <S.HeaderContainer>
      <S.HeaderNavMobile>
        <div className="mobile-header_icon" onClick={() => setShowDrawer(true)}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <Drawer
          closable={false}
          placement="left"
          onClose={() => setShowDrawer(false)}
          open={showDrawer}
          contentWrapperStyle={{ width: 260 }}
          drawerStyle={{ backgroundColor: "#000" }}
        >
          <S.HeaderNavMobileList>
            <li onClick={() => setShowDrawer(false)}>
              <Link to={ROUTES.USER.HOME}>TRANG CHỦ</Link>
            </li>
            <li onClick={() => setShowDrawer(false)}>
              <Link to={ROUTES.BRAND}>THƯƠNG HIỆU</Link>
            </li>
            <li onClick={() => setShowDrawer(false)}>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate({
                    pathname: ROUTES.USER.MEN_DETAIL,
                    search: "?gender=male",
                  });
                }}
              >
                NAM
              </Link>
            </li>
            <li onClick={() => setShowDrawer(false)}>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate({
                    pathname: ROUTES.USER.MEN_DETAIL,
                    search: "?gender=female",
                  });
                }}
              >
                NỮ
              </Link>
            </li>
            <li onClick={() => setShowDrawer(false)}>
              <Link to={ROUTES.CONTACT}>LIÊN HỆ</Link>
            </li>
          </S.HeaderNavMobileList>
        </Drawer>
      </S.HeaderNavMobile>

      <S.Wrapper>
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
              </Link>
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
            </S.DropDownMenuWrapperTH>
          </li>
          <li>
            <S.DropDownMenuWrapperTH>
              <Link
                // to={generatePath(ROUTES.USER.MEN_DETAIL, { type: "male" })}
                onClick={(e) => {
                  e.preventDefault();
                  navigate({
                    pathname: ROUTES.USER.MEN_DETAIL,
                    search: "?gender=male",
                  });
                }}
                className="title-link"
              >
                ĐỒNG HỒ NAM
              </Link>
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
            </S.DropDownMenuWrapperTH>
          </li>
          <li>
            <S.DropDownMenuWrapperTH>
              <Link
                // to={generatePath(ROUTES.USER.WOMEN_DETAIL, { type: "female" })}
                onClick={(e) => {
                  e.preventDefault();
                  navigate({
                    pathname: ROUTES.USER.MEN_DETAIL,
                    search: "?gender=female",
                  });
                }}
                className="title-link"
              >
                ĐỒNG HỒ NỮ
              </Link>
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
            </S.DropDownMenuWrapperTH>
          </li>
          <li>
            <Link to={ROUTES.USER.CONTACT} className="title-link">
              LIÊN HỆ
            </Link>
          </li>
        </S.HeaderNav>

        <S.HeaderRight>
          <Space>
            <S.UserWrapper>
              {accessToken && (
                <p className="userName">{userInfo.data.userName}</p>
              )}

              <div className="user_icon">
                <i className="fa-solid fa-circle-user"></i>

                <div className="user_info-wrapper">
                  <div className="user_info-img">
                    <Avatar size={100}>
                      <UserOutlined />
                    </Avatar>

                    {accessToken && <p>{userInfo.data.email}</p>}
                  </div>

                  <div className="user_actions">
                    {accessToken &&
                      (userInfo.data.role === "admin" ? (
                        <>
                          <Link
                            to={ROUTES.USER.USER_INFO}
                            className="user_actions-btn"
                          >
                            Thông tin tài khoản
                          </Link>{" "}
                          <Link
                            to={ROUTES.ADMIN.DASH_BOARD}
                            className="user_actions-btn"
                          >
                            Tới trang quản trị
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            to={ROUTES.USER.USER_INFO}
                            className="user_actions-btn"
                          >
                            Thông tin tài khoản
                          </Link>
                          <Link
                            to={ROUTES.USER.USER_INFO_ORDER}
                            className="user_actions-btn"
                          >
                            Đơn hàng của bạn
                          </Link>
                          <Link
                            to={ROUTES.USER.USER_INFO_WISHLIST}
                            className="user_actions-btn"
                          >
                            Sản phẩm đã thích
                          </Link>
                        </>
                      ))}
                    {!accessToken && (
                      <Link to={ROUTES.LOGIN} className="user_actions-btn">
                        <span>ĐĂNG NHẬP</span>
                      </Link>
                    )}
                    {accessToken && (
                      <Link
                        to="/"
                        className="user_actions-btn"
                        onClick={() => handleLogout()}
                      >
                        Đăng xuất
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </S.UserWrapper>

            {/* {!accessToken && (
            <Link to={ROUTES.LOGIN}>
              <span>ĐĂNG NHẬP</span>
            </Link>
          )} */}

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
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default Header;
