import Banner from "../../components/Banner";
import CasioProducts from "./ProductSections/CasioProduct";
import ScrollTopButton from "../../components/ScrollTopButton";

import Header from "../../components/Layouts/Header";
import Footer from "../../components/Layouts/Footer";

import * as S from "./style";

const HomePage = () => {
  return (
    <S.HomePageWrapper>
      <Banner />
      <CasioProducts />
      <CasioProducts />
      <CasioProducts />
      <CasioProducts />
    </S.HomePageWrapper>
  );
};

export default HomePage;
