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
import { Col, Form, Row } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <Row gutter={16}>
          <Col xxl={12} lg={12} md={24} xs={24}>
            <Row gutter={16}>
              <Col span={24}>
                <h3 className="footer__title">Về chúng tôi</h3>
              </Col>
              <Col xxl={12} lg={12} md={24} xs={24}>
                <p>
                  Gaida là nhà phân phối đồng hồ chính hãng tại thị trường Việt
                  Nam, cam kết sản phẩm chính hãng 100% và đầy đủ các chính sách
                  bảo hành, quyền lợi của khách hàng khi mua sản phẩm tại Gaida.
                </p>
                <div className="footer__logo">
                  <img
                    width={150}
                    alt=""
                    src="https://theme.hstatic.net/1000270050/1000900842/14/footer_logobct_img.png?v=32"
                  />
                </div>
              </Col>
              <Col xxl={12} lg={12} md={24} xs={24}>
                <p>
                  CÔNG TY TNHH PHÂN PHỐI GAIDA
                  <br /> Địa chỉ: - 92 Quang Trung, Thạch Thang, Hải Châu, Đà
                  Nẵng 550000
                </p>
                <p>Email: sales@gaida.vn</p>
              </Col>
            </Row>
          </Col>
          <Col xxl={6} lg={6} md={12} sm={24} xs={24}>
            <div>
              <h3 className="footer__title">Hỗ trợ khách hàng</h3>
            </div>

            <ul className="footer__list">
              <li className="footer__list-item">
                <Link onClick={(e) => e.preventDefault()}>
                  Phương thức thanh toán
                </Link>
              </li>
              <li className="footer__list-item">
                <Link onClick={(e) => e.preventDefault()}>Hỗ trợ đặt hàng</Link>
              </li>
              <li className="footer__list-item">
                <Link onClick={(e) => e.preventDefault()}>
                  Chính sách giao hàng
                </Link>
              </li>
              <li className="footer__list-item">
                <Link onClick={(e) => e.preventDefault()}>
                  Chính sách bảo hành
                </Link>
              </li>
              <li className="footer__list-item">
                <Link onClick={(e) => e.preventDefault()}>
                  Chính sách đổi trả và hoàn tiền
                </Link>
              </li>
              <li className="footer__list-item">
                <Link onClick={(e) => e.preventDefault()}>
                  Chính sách bảo mật
                </Link>
              </li>
            </ul>
          </Col>
          <Col xxl={6} lg={6} md={12} sm={24} xs={24}>
            <div>
              <h3 className="footer__title">Chăm sóc khách hàng</h3>
            </div>

            <div className="footer__support">
              <div className="footer__support-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="footer__support-info">
                <h3>088 888 8888</h3>
                <p>support@gaida.vn</p>
              </div>
            </div>

            <div className="footer__follow">
              <h3 className="footer__title">Follow Us</h3>

              <div className="footer__follow-brands">
                <button className="follow__brand-icon">
                  <i className="fa-brands fa-facebook"></i>
                </button>
                <button className="follow__brand-icon">
                  <i className="fa-brands fa-instagram"></i>
                </button>
                <button className="follow__brand-icon">
                  <i className="fa-brands fa-twitter"></i>
                </button>
                <button className="follow__brand-icon">
                  <i className="fa-brands fa-google"></i>
                </button>
                <button className="follow__brand-icon">
                  <i className="fa-brands fa-youtube"></i>
                </button>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className="footer__web-author">
              <p>Lập trình bởi Phan Hoài Tuấn - Nguyễn Trọng Phương (2022)</p>
            </div>
          </Col>
        </Row>
      </S.ContentWrapper>
    </S.Wrapper>
  );

  // return (
  //   <S.FooterWrapper>
  //     <div className="footer-container">
  //       <S.RowFooter>
  //         <Col xl={6} lg={6} sm={24} xs={24} className="brand-footer">
  //           <S.TextLabel>Tuan & Phuong</S.TextLabel>
  //           <p style={{ marginBottom: 20, fontSize: 25, fontWeight: 400 }}>
  //             Đặt mua ngay
  //           </p>

  //           <Form name="emailForm" className="email-form">
  //             <Form.Item name="email">
  //               <S.InputFooter
  //                 prefix={<MailOutlined />}
  //                 placeholder="Nhập email của bạn"
  //               />
  //             </Form.Item>
  //             <Form.Item name="email">
  //               <S.ButtonFooter
  //                 htmlType="submit"
  //                 prefix={<MailOutlined />}
  //                 size="large"
  //               >
  //                 Đặt mua
  //               </S.ButtonFooter>
  //             </Form.Item>
  //           </Form>
  //         </Col>
  //         <S.ColFooter xl={4} lg={4} md={6} sm={12} xs={24}>
  //           <S.FooterContent>
  //             <p>HƯỚNG DẪN</p>
  //             <S.LinkFooter to="/gioi-thieu">Giới thiệu</S.LinkFooter>
  //             <S.LinkFooter to={ROUTES.USER.CONTACT}>
  //               Thông tin liên hệ
  //             </S.LinkFooter>
  //             <S.LinkFooter to="/thanh-toan-va-tra-gop">
  //               Thanh toán và trả góp
  //             </S.LinkFooter>

  //             <S.LinkFooter to="/chinh-sach-bao-hanh">
  //               Chính Sách Bảo Hành
  //             </S.LinkFooter>
  //           </S.FooterContent>
  //         </S.ColFooter>
  //         <S.ColFooter xl={4} lg={4} md={6} sm={12} xs={24}>
  //           <S.FooterContent>
  //             <p>THAM KHẢO</p>
  //             <S.LinkFooter to="/hoi-dap">Hỏi Đáp - Góp Ý</S.LinkFooter>
  //             <S.LinkFooter to="/dieu-khoan-su-dung">
  //               Điều Khoản Sử Dụng
  //             </S.LinkFooter>
  //             <S.LinkFooter to="/bao-mat">Bảo Mật Thông Tin</S.LinkFooter>
  //           </S.FooterContent>
  //         </S.ColFooter>
  //         <S.ColFooter xl={4} lg={4} md={6} sm={12} xs={24}>
  //           <S.FooterContent>
  //             <p>HỖ TRỢ</p>
  //             <S.LinkFooter to="/chinh-sach-hoan-tra">
  //               Chính Sách Hoàn Trả
  //             </S.LinkFooter>
  //             <S.LinkFooter to="/van-chuyen-va-giao-nhan">
  //               Vận Chuyển & Giao Nhận
  //             </S.LinkFooter>
  //             <S.LinkFooter to="/chi-phi-van-chuyen">
  //               Chi Phí Vận Chuyển
  //             </S.LinkFooter>
  //           </S.FooterContent>
  //         </S.ColFooter>
  //         <S.ColFooter xl={6} lg={6} md={6} sm={12} xs={24}>
  //           <S.FooterContent>
  //             <p>THÔNG TIN LIÊN HỆ</p>
  //             <span>
  //               <PhoneOutlined style={{ margin: "10px 10px 0 0" }} />
  //               02363 888 279
  //             </span>
  //             <span>
  //               <MailOutlined style={{ margin: "10px 10px 20px 0" }} />
  //               digital@phuong.com
  //             </span>
  //             <Col>
  //               <FacebookOutlined style={{ fontSize: 35, marginRight: 10 }} />
  //               <YoutubeOutlined style={{ fontSize: 35, marginRight: 10 }} />
  //               <InstagramOutlined style={{ fontSize: 35, marginRight: 10 }} />
  //               <TwitterOutlined style={{ fontSize: 35, marginRight: 10 }} />
  //             </Col>
  //           </S.FooterContent>
  //         </S.ColFooter>
  //       </S.RowFooter>
  //       <div style={{ borderTop: "2px solid #fff" }}>
  //         <div>
  //           <div
  //             style={{
  //               maxWidth: 300,
  //               margin: "0 auto ",
  //             }}
  //           >
  //             <p
  //               style={{
  //                 textAlign: "center",
  //               }}
  //             >
  //               2022
  //               <CopyrightOutlined style={{ margin: "0 5px 0px 5px" }} />
  //               company.Ltd | All right reserved
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </S.FooterWrapper>
  // );
};

export default Footer;
