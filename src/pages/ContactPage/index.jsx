import * as S from "./styles";
import { Image } from "antd";

import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <S.ContactPageWrapper>
        <S.ContactPageContainer>
          <Image
            width={800}
            height={500}
            src="https://theoandharris.com/wp-content/uploads/contact-page.jpg"
          />
          <S.ContactPageContent>
            <S.ContactPageTitle>Liên hệ với chúng tôi</S.ContactPageTitle>
            <S.ContactPageItem>
              <p style={{ fontSize: 23, fontWeight: 700, marginBottom: 0 }}>
                Email
              </p>
              <S.TextListItem>
                Yêu cầu sản phẩm : info@phuong.com
              </S.TextListItem>
              <S.TextListItem>
                Vận chuyển & hỗ trợ : office@phuong.com
              </S.TextListItem>
              <S.TextListItem>
                Hỗ trợ kỹ thuật : digital@phuong.com
              </S.TextListItem>
              <S.TextListItem>Quảng cáo : partner@phuong.com</S.TextListItem>
            </S.ContactPageItem>
            <S.ContactPageItem>
              <p style={{ fontSize: 23, fontWeight: 700, marginBottom: 0 }}>
                Phương tiện truyền thông
              </p>
              <S.LinkFooter href="/Instagram">Instagram</S.LinkFooter>
              <S.LinkFooter href="/Facebook">Facebook</S.LinkFooter>
              <S.LinkFooter href="/YouTube">YouTube</S.LinkFooter>
            </S.ContactPageItem>
            <S.ContactPageItem>
              <p style={{ fontSize: 23, fontWeight: 700, marginBottom: 0 }}>
                Địa chỉ liên hệ
              </p>
              <S.TextListItem>
                92 Quang Trung, quận Hải Châu, Thành phố Đà Nẵng
              </S.TextListItem>
              <S.TextListItem>Điện thoại: 02363 888 279</S.TextListItem>
            </S.ContactPageItem>
          </S.ContactPageContent>
        </S.ContactPageContainer>
      </S.ContactPageWrapper>

      <Footer />
    </>
  );
};

export default ContactPage;
