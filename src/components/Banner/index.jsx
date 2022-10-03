import { Carousel } from "antd";

import * as S from "./style";

import baner_1 from "../../assets/banner/baner-1.png";
import baner_2 from "../../assets/banner/baner-2.png";

const Banner = () => {
  return (
    <S.BannerWrapper>
      <Carousel autoplay>
        <S.BannerImage>
          <img src={baner_1} alt="banner" />
        </S.BannerImage>
        <S.BannerImage>
          <img src={baner_2} alt="banner" />
        </S.BannerImage>
      </Carousel>
    </S.BannerWrapper>
  );
};

export default Banner;
