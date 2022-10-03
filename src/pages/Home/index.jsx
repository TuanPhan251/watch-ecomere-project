import Header from "../../components/Header";
import Banner from "../../components/Banner";
import CasioProducts from "./ProductSections/CasioProduct";
import ScrollTopButton from "../../components/ScrollTopButton";

import * as S from "./style";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <CasioProducts />
        <CasioProducts />
        <CasioProducts />
        <CasioProducts />

        <ScrollTopButton />
      </main>
    </>
  );
};

export default HomePage;
