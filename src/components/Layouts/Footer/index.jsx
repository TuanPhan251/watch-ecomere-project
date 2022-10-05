import { CopyrightOutlined } from "@ant-design/icons";
import * as S from "./styles";
import { ROUTES } from "../../../constants/routes";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterContent>
          <S.TextLabel>Tuan & Phuong</S.TextLabel>
          <S.IconCopyRight>
            <CopyrightOutlined />
            <span style={{ marginLeft: 5, fontSize: 12 }}>2022</span>
          </S.IconCopyRight>
        </S.FooterContent>

        <S.FooterContent>
          <p>HƯỚNG DẪN</p>
          <S.LinkFooter to="/gioi-thieu">Giới thiệu</S.LinkFooter>
          <S.LinkFooter to={ROUTES.CONTACT}>Thông tin liên hệ</S.LinkFooter>
          <S.LinkFooter to="/thanh-toan-va-tra-gop">
            Thanh toán và trả góp
          </S.LinkFooter>
          <S.LinkFooter to="/van-chuyen-va-giao-nhan">
            Vận Chuyển & Giao Nhận
          </S.LinkFooter>
          <S.LinkFooter to="/chinh-sach-bao-hanh">
            Chính Sách Bảo Hành
          </S.LinkFooter>
        </S.FooterContent>
        <S.FooterContent>
          <p>THAM KHẢO</p>
          <S.LinkFooter to="/hoi-dap">Hỏi Đáp - Góp Ý</S.LinkFooter>
          <S.LinkFooter to="/dieu-khoan-su-dung">
            Điều Khoản Sử Dụng
          </S.LinkFooter>
          <S.LinkFooter to="/bao-mat">Bảo Mật Thông Tin</S.LinkFooter>
        </S.FooterContent>
        <S.FooterContent>
          <p>TRUYỀN THÔNG</p>
          <S.LinkFooterInfo href="/Instagram">Instagram</S.LinkFooterInfo>
          <S.LinkFooterInfo href="/Facebook">Facebook</S.LinkFooterInfo>
          <S.LinkFooterInfo href="/YouTube">YouTube</S.LinkFooterInfo>
        </S.FooterContent>
        <S.FooterContent>
          <Link to={ROUTES.HOME} style={{ width: "100%", height: "100%" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "100%", height: "70%" }}
            />
          </Link>
        </S.FooterContent>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
