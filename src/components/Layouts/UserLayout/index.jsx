import { Outlet } from "react-router-dom";

import * as S from "./styles";

import Header from "../Header";
import Footer from "../Footer";
import ScrollTopButton from "../../ScrollTopButton";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollTopButton />
      <Footer />
    </>
  );
};

export default UserLayout;
