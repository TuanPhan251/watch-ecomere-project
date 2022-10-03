import { Link } from "react-router-dom";

import { Space, Badge, Row, Col } from "antd";

import logo from "../../assets/logo/logo.png";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderLogo>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </S.HeaderLogo>
      <S.HeaderNav>
        <li>
          <Link>THƯƠNG HIỆU</Link>
        </li>
        <li>
          <Link>ĐỒNG HỒ NAM</Link>
        </li>
        <li>
          <Link>ĐỒNG HỒ NỮ</Link>
        </li>
        <li>
          <Link>LIÊN HỆ</Link>
        </li>
      </S.HeaderNav>

      <S.HeaderSearchContainer>
        <input type="text" placeholder="Tìm sản phẩm" />
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </S.HeaderSearchContainer>

      <S.HeaderRight>
        <Space>
          <Link>
            <span>ĐĂNG NHẬP</span>
          </Link>

          <Badge count={3}>
            <i class="fa-solid fa-cart-shopping"></i>
          </Badge>
        </Space>
      </S.HeaderRight>
    </S.HeaderContainer>
  );
};

export default Header;
