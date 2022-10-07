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
            <S.TitlePageLink to={ROUTES.BRAND}>THƯƠNG HIỆU</S.TitlePageLink>
            <S.DropDownMenuContainerTH>
              <S.DropDownMenuContentTH>
                <div>
                  <p
                    style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}
                  >
                    CÁC HÃNG BÁN CHẠY
                  </p>
                  <S.ListDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Daniel Wellington
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Casio
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Seiko
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Saga
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                  </S.ListDropDownMenu>
                </div>
                <div>
                  <p
                    style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}
                  >
                    KHUYÊN DÙNG
                  </p>
                  <S.ListDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Daniel Wellington
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Casio
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Seiko
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Saga
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                  </S.ListDropDownMenu>
                </div>

                <div>
                  <p
                    style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}
                  >
                    CÁC DÒNG ĐẶC BIỆT
                  </p>
                  <S.ListDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Daniel Wellington
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Casio
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Seiko
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Saga
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                  </S.ListDropDownMenu>
                </div>
              </S.DropDownMenuContentTH>
            </S.DropDownMenuContainerTH>
          </S.DropDownMenuWrapperTH>
        </li>
        <li>
          <S.DropDownMenuWrapperTH>
            <S.TitlePageLink to={ROUTES.MEN_DETAIL}>
              ĐỒNG HỒ NAM
            </S.TitlePageLink>
            <S.DropDownMenuContainerTH>
              <S.DropDownMenuContentTH>
                <div>
                  <p
                    style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}
                  >
                    CÁC HÃNG BÁN CHẠY
                  </p>
                  <S.ListDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Daniel Wellington
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Casio
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Seiko
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Saga
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                  </S.ListDropDownMenu>
                </div>
                <div>
                  <p
                    style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}
                  >
                    KHUYÊN DÙNG
                  </p>
                  <S.ListDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Daniel Wellington
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Casio
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Seiko
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Saga
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                  </S.ListDropDownMenu>
                </div>

                <div>
                  <p
                    style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}
                  >
                    CÁC DÒNG ĐẶC BIỆT
                  </p>
                  <S.ListDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Daniel Wellington
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Casio
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Seiko
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Saga
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                  </S.ListDropDownMenu>
                </div>
              </S.DropDownMenuContentTH>
            </S.DropDownMenuContainerTH>
          </S.DropDownMenuWrapperTH>
        </li>
        <li>
          <S.DropDownMenuWrapperTH>
            <S.TitlePageLink to={ROUTES.WOMEN_DETAIL}>
              ĐỒNG HỒ NỮ
            </S.TitlePageLink>
            <S.DropDownMenuContainerTH>
              <S.DropDownMenuContentTH>
                <div>
                  <p
                    style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}
                  >
                    CÁC HÃNG BÁN CHẠY
                  </p>
                  <S.ListDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Daniel Wellington
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Casio
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Seiko
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Saga
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                  </S.ListDropDownMenu>
                </div>
                <div>
                  <p
                    style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}
                  >
                    KHUYÊN DÙNG
                  </p>
                  <S.ListDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Daniel Wellington
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Casio
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Seiko
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Saga
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                  </S.ListDropDownMenu>
                </div>

                <div>
                  <p
                    style={{ marginBottom: 10, fontSize: 16, fontWeight: 600 }}
                  >
                    CÁC DÒNG ĐẶC BIỆT
                  </p>
                  <S.ListDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Daniel Wellington
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Casio
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Seiko
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                    <S.ItemDropDownMenu>
                      <S.ItemLink style={{ padding: 0 }} to="/">
                        <i
                          className="fa-solid fa-chevron-right"
                          style={{ marginRight: 3 }}
                        />
                        Saga
                      </S.ItemLink>
                    </S.ItemDropDownMenu>
                  </S.ListDropDownMenu>
                </div>
              </S.DropDownMenuContentTH>
            </S.DropDownMenuContainerTH>
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
