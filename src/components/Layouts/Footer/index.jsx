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
import { Col, Row, Form } from "antd";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <div className="footer-container">
        <Row>
          <Col span={6}>
            <S.TextLabel>Tuan & Phuong</S.TextLabel>
            <p style={{ marginBottom: 20, fontSize: 25, fontWeight: 400 }}>
              Subscribes Now
            </p>

            <Form name="emailForm" style={{ width: "60%" }}>
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
          <Col span={4}>
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
          </Col>
          <Col span={4}>
            <S.FooterContent>
              <p>THAM KHẢO</p>
              <S.LinkFooter to="/hoi-dap">Hỏi Đáp - Góp Ý</S.LinkFooter>
              <S.LinkFooter to="/dieu-khoan-su-dung">
                Điều Khoản Sử Dụng
              </S.LinkFooter>
              <S.LinkFooter to="/bao-mat">Bảo Mật Thông Tin</S.LinkFooter>
            </S.FooterContent>
          </Col>
          <Col span={4}>
            <S.FooterContent>
              <p>THAM KHẢO</p>
              <S.LinkFooter to="/hoi-dap">Hỏi Đáp - Góp Ý</S.LinkFooter>
              <S.LinkFooter to="/dieu-khoan-su-dung">
                Điều Khoản Sử Dụng
              </S.LinkFooter>
              <S.LinkFooter to="/bao-mat">Bảo Mật Thông Tin</S.LinkFooter>
            </S.FooterContent>
          </Col>
          <Col span={6}>
            <S.FooterContent style={{ marginLeft: 100 }}>
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
          </Col>
        </Row>
        <Row style={{ borderTop: "2px solid #fff" }}>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0 30px",
            }}
          >
            <p>
              2022
              <CopyrightOutlined style={{ margin: "0 5px 0px 5px" }} />
              company.Ltd | All right reserved
            </p>
          </Col>
        </Row>
      </div>
    </S.FooterWrapper>
  );
};

export default Footer;
