import * as S from "./styles";

import Footer from "../../components/Layouts/Footer";
import Header from "../../components/Layouts/Header";

const BrandPage = () => {
  return (
    <>
      <Header />
      <S.BrandPageWrapper>
        <S.BrandPageContainer>
          <div></div>
        </S.BrandPageContainer>
      </S.BrandPageWrapper>
      <Footer />
    </>
  );
};

export default BrandPage;
