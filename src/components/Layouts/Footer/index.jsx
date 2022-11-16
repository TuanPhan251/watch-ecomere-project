import {
  CopyrightOutlined,
  MailOutlined,
  PhoneOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import { ROUTES } from "../../../constants/routes";
import { Col, Form } from "antd";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <div className="footer-container">
        <S.RowFooter>
          <Col xl={6} lg={6} sm={24} xs={24} className="brand-footer">
            <S.TextLabel>Tuan & Phuong</S.TextLabel>
            <p style={{ marginBottom: 20, fontSize: 25, fontWeight: 400 }}>
              Subscribes Now
            </p>

            <Form name="emailForm" className="email-form">
              <Form.Item name="email">
                <S.InputFooter
                  prefix={<MailOutlined />}
                  placeholder="Nhập email của bạn"
                />
              </Form.Item>
              <Form.Item name="email">
                <S.ButtonFooter
                  htmlType="submit"
                  prefix={<MailOutlined />}
                  size="large"
                >
                  Subscribes
                </S.ButtonFooter>
              </Form.Item>
            </Form>
          </Col>
          <S.ColFooter xl={4} lg={4} md={6} sm={12} xs={24}>
            <S.FooterContent>
              <p>HƯỚNG DẪN</p>
              <S.LinkFooter to="/gioi-thieu">Giới thiệu</S.LinkFooter>
              <S.LinkFooter to={ROUTES.USER.CONTACT}>
                Thông tin liên hệ
              </S.LinkFooter>
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
          </S.ColFooter>
          <S.ColFooter xl={4} lg={4} md={6} sm={12} xs={24}>
            <S.FooterContent>
              <p>THAM KHẢO</p>
              <S.LinkFooter to="/hoi-dap">Hỏi Đáp - Góp Ý</S.LinkFooter>
              <S.LinkFooter to="/dieu-khoan-su-dung">
                Điều Khoản Sử Dụng
              </S.LinkFooter>
              <S.LinkFooter to="/bao-mat">Bảo Mật Thông Tin</S.LinkFooter>
            </S.FooterContent>
          </S.ColFooter>
          <S.ColFooter xl={4} lg={4} md={6} sm={12} xs={24}>
            <S.FooterContent>
              <p>THAM KHẢO</p>
              <S.LinkFooter to="/hoi-dap">Hỏi Đáp - Góp Ý</S.LinkFooter>
              <S.LinkFooter to="/dieu-khoan-su-dung">
                Điều Khoản Sử Dụng
              </S.LinkFooter>
              <S.LinkFooter to="/bao-mat">Bảo Mật Thông Tin</S.LinkFooter>
            </S.FooterContent>
          </S.ColFooter>
          <S.ColFooter xl={6} lg={6} md={6} sm={12} xs={24}>
            <S.FooterContent>
              <p>THÔNG TIN LIÊN HỆ</p>
              <span>
                <PhoneOutlined style={{ margin: "10px 10px 0 0" }} />
                02363 888 279
              </span>
              <span>
                <MailOutlined style={{ margin: "10px 10px 20px 0" }} />
                digital@phuong.com
              </span>
              <Col>
                <FacebookOutlined style={{ fontSize: 40, marginRight: 10 }} />
                <YoutubeOutlined style={{ fontSize: 40, marginRight: 10 }} />
                <InstagramOutlined style={{ fontSize: 40, marginRight: 10 }} />
                <TwitterOutlined style={{ fontSize: 40, marginRight: 10 }} />
              </Col>
            </S.FooterContent>
          </S.ColFooter>
        </S.RowFooter>
        <div style={{ borderTop: "2px solid #fff" }}>
          <div>
            <div
              style={{
                maxWidth: 300,
                margin: "0 auto ",
              }}
            >
              <p
                style={{
                  textAlign: "center",
                }}
              >
                2022
                <CopyrightOutlined style={{ margin: "0 5px 0px 5px" }} />
                company.Ltd | All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </S.FooterWrapper>
  );
};

export default Footer;
