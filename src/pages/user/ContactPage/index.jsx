import * as S from "./styles";
import { Breadcrumb, Col, Image, Row } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  MailOutlined,
  WhatsAppOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

const ContactPage = () => {
  return (
    <S.ContactPageWrapper>
      <S.BreadcrumbWrapper>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to={ROUTES.USER.HOME}>Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <p>Liên hệ</p>
          </Breadcrumb.Item>
        </Breadcrumb>
      </S.BreadcrumbWrapper>
      <Row className="contact-container">
        <Col xl={15} lg={12} className="contact-container-left">
          <Image
            width="100%"
            height="100%"
            src="https://theoandharris.com/wp-content/uploads/contact-page.jpg"
          />
        </Col>
        <Col xl={8} lg={11} className="contact-container-right">
          <div className="contact-title">
            <span>
              <WhatsAppOutlined />
            </span>{" "}
            Liên hệ với chúng tôi
          </div>
          <div className="contact-item">
            <p style={{ fontSize: 23, fontWeight: 700, marginBottom: 0 }}>
              <span>
                <MailOutlined />
              </span>{" "}
              Email
            </p>
            <p className="contact-text-list-item ">
              Yêu cầu sản phẩm : info@phuong.com
            </p>
            <p className="contact-text-list-item ">
              Vận chuyển & hỗ trợ : office@phuong.com
            </p>
            <p className="contact-text-list-item ">
              Hỗ trợ kỹ thuật : digital@phuong.com
            </p>
            <p className="contact-text-list-item ">
              Quảng cáo : partner@phuong.com
            </p>
          </div>
          <div className="contact-item">
            <p style={{ fontSize: 23, fontWeight: 700, marginBottom: 0 }}>
              <span>
                <GlobalOutlined />
              </span>{" "}
              Phương tiện truyền thông
            </p>
            <S.LinkFooter href="/Instagram">
              <span>
                <InstagramOutlined />
              </span>{" "}
              Instagram
            </S.LinkFooter>
            <S.LinkFooter href="/Facebook">
              <span>
                <FacebookOutlined />
              </span>{" "}
              Facebook
            </S.LinkFooter>
            <S.LinkFooter href="/YouTube">
              <span>
                <YoutubeOutlined />
              </span>{" "}
              YouTube
            </S.LinkFooter>
          </div>
          <div className="contact-item">
            <p style={{ fontSize: 23, fontWeight: 700, marginBottom: 0 }}>
              <span>
                <EnvironmentOutlined />
              </span>{" "}
              Địa chỉ liên hệ
            </p>
            <p className="contact-text-list-item ">
              92 Quang Trung, quận Hải Châu, Thành phố Đà Nẵng
            </p>
            <p className="contact-text-list-item ">Điện thoại: 02363 888 279</p>
          </div>
        </Col>
      </Row>

      <S.InfoWrapper>
        <div className="info-container-contact">
          <h2>TẠI SAO NÊN MUA HÀNG TẠI ĐỒNG HỒ TUẤN PHƯƠNG ?</h2>
          <p>
            Chúng tôi cam kết mang lại những giá trị cao nhất cho khách hàng khi
            đến với Đồng Hồ Tuấn Phương
          </p>
        </div>
        <div className="item-wrapper-contact">
          <Row className="item-container-contact" gutter={[16, 16]}>
            <Col
              xl={7}
              lg={7}
              md={9}
              sm={11}
              xs={20}
              className="item-content-contact"
            >
              <div>
                <img
                  src="https://cdn3.dhht.vn/wp-content/uploads/2018/09/1.png"
                  alt=""
                />
                <h3>UY TÍN HÀNG ĐẦU</h3>
              </div>
              <p>
                Với kinh nghiệm hơn 30 năm trong ngành đồng hồ, Đồng Hồ Hải
                Triều tự tin đem đến cho bạn những chiếc đồng hồ tốt nhất cùng
                trải nghiệm tuyệt vời khi mua đồng hồ tại Tuấn Phương.
              </p>
            </Col>
            <Col
              xl={7}
              lg={7}
              md={9}
              sm={11}
              xs={20}
              className="item-content-contact"
            >
              <div>
                <img
                  src="https://cdn3.dhht.vn/wp-content/uploads/2018/09/3.png"
                  alt=""
                />
                <h3>HẬU MÃI HÀNG ĐẦU</h3>
              </div>
              <p>
                Chế độ bảo hành lên đến 5 năm cho tất cả đồng hồ chính hãng mua
                tại Đồng Hồ Tuấn Phương.
              </p>
            </Col>
            <Col
              xl={7}
              lg={7}
              md={9}
              sm={11}
              xs={20}
              className="item-content-contact"
            >
              <div>
                <img
                  src="https://cdn3.dhht.vn/wp-content/uploads/2018/09/5.png"
                  alt=""
                />
                <h3>1 ĐỔI 1 </h3>
              </div>
              <p>
                Chế độ 1 đổi 1 trong tuần đầu tiên nếu có bất kỳ lỗi gì do nhà
                sản xuất.
              </p>
            </Col>

            <Col
              xl={7}
              lg={7}
              md={9}
              sm={11}
              xs={20}
              className="item-content-contact"
            >
              <div>
                <img
                  src="https://cdn3.dhht.vn/wp-content/uploads/2018/09/2.png"
                  alt=""
                />
                <h3>ĐỔI HÀNG DỄ DÀNG</h3>
              </div>
              <p>
                Đồng hồ sai kích cỡ? Màu sắc không hợp với bạn? Bạn mua làm quà
                tặng người thân nhưng người nhận không ưng ý? Đừng lo! Bạn có
                thể đổi hàng trong vòng 7 ngày.
              </p>
            </Col>
            <Col
              xl={7}
              lg={7}
              md={9}
              sm={11}
              xs={20}
              className="item-content-contact"
            >
              <div>
                <img
                  src="https://cdn3.dhht.vn/wp-content/uploads/2018/09/4.png"
                  alt=""
                />
                <h3>THANH TOÁN DỄ DÀNG</h3>
              </div>
              <p>
                Bạn chỉ phải trả tiền khi đã nhận được hàng! Ngay Tại Nhà Bạn!
                Chuyển khoản trực tiếp (Cho những bạn muốn gửi quà cho bạn bè,
                người thân)
              </p>
            </Col>
            <Col
              xl={7}
              lg={7}
              md={9}
              sm={11}
              xs={20}
              className="item-content-contact"
            >
              <div>
                <img
                  src="https://cdn3.dhht.vn/wp-content/uploads/2018/09/6.png"
                  alt=""
                />
                <h3>THAY PIN MIỄN PHÍ</h3>
              </div>
              <p>
                Thay pin miễn phí suốt đời cho tất cả các đồng hồ được Đồng Hồ
                Tuấn Phương phân phối!
              </p>
            </Col>
          </Row>
        </div>
      </S.InfoWrapper>
    </S.ContactPageWrapper>
  );
};

export default ContactPage;
