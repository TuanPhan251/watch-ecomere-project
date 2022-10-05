import { Carousel } from "antd";

import * as S from "./style";

import banner_1 from "../../assets/banner/banner-1.png";
import banner_2 from "../../assets/banner/banner-2.png";

const Banner = () => {
  return (
    <S.BannerWrapper>
      <Carousel autoplay>
        <S.BannerImage>
          <img src={banner_1} alt="banner" />
        </S.BannerImage>
        <S.BannerImage>
          <img src={banner_2} alt="banner" />
        </S.BannerImage>
      </Carousel>
    </S.BannerWrapper>
  );
};

export default Banner;
