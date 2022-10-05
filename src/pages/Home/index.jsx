import Banner from "../../components/Banner";
import CasioProducts from "./ProductSections/CasioProduct";
import ScrollTopButton from "../../components/ScrollTopButton";

import * as S from "./style";

const HomePage = () => {
  return (
    <>
      <S.HomePageWrapper>
        <Banner />
        <CasioProducts />
        <CasioProducts />
        <CasioProducts />
        <CasioProducts />
        <ScrollTopButton />
      </S.HomePageWrapper>
    </>
  );
};

export default HomePage;
