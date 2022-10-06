import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Space, Badge } from "antd";

import CartDrawer from "./Cart";

import logo from "../../../assets/logo/logo.png";
import * as S from "./style";
import { ROUTES } from "../../../constants/routes";

const Header = () => {
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
            <Link>THƯƠNG HIỆU</Link>
            <S.DropDownMenuContainerTH>
              <S.DropDownMenuContentTH>
                <div>
                  <Link to="/">1</Link>
                  <Link to="/">2</Link>
                  <Link to="/">3</Link>
                </div>
                <div>
                  <Link to="/">1</Link>
                  <Link to="/">2</Link>
                  <Link to="/">3</Link>
                </div>
                <div>
                  <Link to="/">1</Link>
                  <Link to="/">2</Link>
                  <Link to="/">3</Link>
                </div>
              </S.DropDownMenuContentTH>
            </S.DropDownMenuContainerTH>
          </S.DropDownMenuWrapperTH>
        </li>
        <li>
          <Link>ĐỒNG HỒ NAM</Link>
        </li>
        <li>
          <Link>ĐỒNG HỒ NỮ</Link>
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
              <i className="fa-solid fa-cart-shopping"></i>
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
