import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    filter: blur(8px);
  }
  to {
    opacity: 1;
    filter: blur(0px);

  }
`;

export const HomePageWrapper = styled.div`
  padding-bottom: 40px;
  background-color: var(--bgr-color);

  .top__spacer {
    width: 100%;
    padding-top: var(--header-height);
  }

  .header_img-wrapper {
    position: relative;
    max-width: 100%;
    height: calc(100vh - var(--header-height));

    video {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    .header_img-header {
      position: absolute;
      bottom: 20%;
      right: 50%;
      width: 100%;
      transform: translateX(50%);
      color: #fff;
      font-size: 40px;
      font-family: "Charmonman", cursive;
      text-align: center;
      text-shadow: 0 0 10px #262626;
      animation: ${fadeIn} 8s ease;
      z-index: 2;
    }

    .header_img-slogan {
      position: absolute;
      bottom: 10%;
      right: 50%;
      width: 100%;
      transform: translateX(50%);
      color: #fff;
      font-size: 40px;
      font-family: "Charmonman", cursive;
      text-align: center;
      text-shadow: 0 0 10px #262626;
      animation: ${fadeIn} 6s ease;
      animation-fill-mode: forwards;
      animation-delay: 2s;
      opacity: 0;

      z-index: 2;
    }

    .header-img-action {
      position: absolute;
      bottom: 20px;
      right: 50%;
      transform: translateX(50%);
      padding: 8px 16px;
      font-size: 16px;
      background-color: var(--button-color);
      color: #fff;
      border: none;
      text-transform: uppercase;
      border-radius: 10px;
      animation: ${fadeIn} 3s ease;
      animation-fill-mode: forwards;
      animation-delay: 4s;
      opacity: 0;

      cursor: pointer;
      z-index: 2;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 50%;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.8)
      );
      z-index: 1;
    }

    @media (max-width: 576px) {
      .header_img-header {
        font-size: 28px;
        bottom: 50%;
      }

      .header_img-slogan {
        bottom: 40%;
        font-size: 28px;
      }

      .header-img-action {
        bottom: 30%;
      }
    }

    @media (max-width: 768px) and (min-width: 577px) {
      .header_img-header {
        font-size: 28px;
      }

      .header_img-slogan {
        font-size: 28px;
      }

      .header-img-action {
      }
    }
  }

  @media (max-width: 868px) {
    .header_img-wrapper {
      max-width: 100%;

      img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }

      video {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .policy__section {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto 0;

    .policy__section-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 12px;
    }

    .policy__section-content {
      margin-top: 12px;
      text-align: center;
      h4 {
        font-size: 18px;
      }

      p {
        color: #999;
      }
    }
  }

  .new_products-section {
    max-width: 1200px;
    width: 100%;
    margin: 40px auto;
    padding: 40px 12px;
    background-color: #fff;

    .new_products_section-heading {
      padding: 4px 8px;
      margin-bottom: 24px;
      font-size: 26px;
      text-align: center;
      border-radius: 2px;
    }

    .new_products-list {
      display: flex;
      flex-wrap: wrap;
      padding: 12px;
    }

    .swiper {
      padding: 10px 0;
      .swiper-button-next,
      .swiper-button-prev {
        color: var(--button-color);
      }

      .swiper-pagination {
        bottom: -4px;
      }
      .swiper-pagination-bullet {
        background-color: var(--button-color) !important;
      }
    }
  }

  .men_products-section {
    display: flex;
    height: 100%;
    max-width: 1200px;
    width: 100%;
    margin: auto;

    .men_products-banner-img {
      width: 50%;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .men_products-list {
      width: 50%;
    }

    @media (max-width: 868px) {
      flex-direction: column;

      .men_products-banner-img {
        width: 100%;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .men_products-list {
        width: 100%;
      }
    }
  }

  .women_products-section {
    display: flex;
    flex-direction: row-reverse;
    max-width: 1200px;
    width: 100%;
    margin: auto;

    .women_products-banner-img {
      position: relative;
      width: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .women_products-list {
      width: 50%;
    }

    @media (max-width: 868px) {
      flex-direction: column;

      .women_products-banner-img {
        width: 100%;
        position: relative;

        img {
          width: 100%;
        }
      }

      .women_products-list {
        width: 100%;
      }
    }
  }

  .product_banner-title {
    position: absolute;
    top: 10%;
    right: 50%;
    transform: translateX(50%);
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-shadow: 0 0 4px #262626;

    @media (max-width: 868px) {
      top: unset;
      bottom: 20%;
      margin-bottom: 12px;
      font-size: 20px;
    }
  }

  .product_banner-btn {
    position: absolute;
    top: 20%;
    right: 50%;
    transform: translateX(50%);
    padding: 8px 12px;
    font-size: 16px;
    color: #fff;
    border: none;
    border-radius: 10px;
    background-color: var(--button-color);
    box-shadow: 0 0 4px #262626;
    transition: all 0.3s ease;
    cursor: pointer;

    :hover {
      box-shadow: 0 0 8px #262626;
      background-color: #a8071a;
    }

    @media (max-width: 868px) {
      top: unset;
      bottom: 10%;
      font-size: 16px;
    }
  }

  .instagram__follow-section {
    max-width: 1200px;
    width: 100%;
    margin: 24px auto 0;
    padding: 12px;
    background-color: #fff;

    .follow__section-title {
      h3 {
        text-align: center;
        font-size: 24px;
      }
    }

    .follow__section-name {
      margin-top: 12px;

      p {
        text-align: center;
        color: #999;
      }
    }

    .follow__section-image-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 24px;

      .follow__section-image {
        position: relative;
        width: 100%;
        padding-top: 100%;
        overflow: hidden;
        cursor: pointer;

        img {
          position: absolute;
          inset: 0;
          width: 100%;
          object-fit: cover;
          transition: all 1s ease;
        }

        :hover {
          img {
            transform: scale(1.2);
          }

          ::before {
            background: rgba(255, 255, 255, 0.5) none repeat scroll 0 0;
            bottom: 50%;
            top: 50%;
          }
        }
        ::after,
        ::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          transition: all 0.5s ease-out 0s;
          -webkit-transition: all 0.5s ease-in-out 0s;
          -ms-transition: all 0.5s ease-in-out 0s;
        }
      }
    }
  }
`;

export const EmailRegister = styled.section`
  padding: 40px 0;

  .email_register-inner {
    padding: 150px 0;
    background-image: url(${(props) => props.bgrImage});
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
    position: relative;

    .email_register-content {
      max-width: 800px;
      width: 90%;
      padding: 40px;
      margin: 0 auto;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.9);

      h3 {
        margin-bottom: 4px;
        color: var(--dark-text-color);
        text-align: center;
        font-size: 28px;
        line-height: 50px;
      }

      p {
        margin-bottom: 24px;
        color: var(--dark-text-color);
        text-align: center;
        font-size: 16px;
      }

      .email_register-form {
        display: flex;
        justify-content: center;

        input {
          padding: 8px 16px;
          width: 300px;
          font-size: 16px;
          outline: none;
        }

        button {
          padding: 0 12px;
          color: #fff;
          font-size: 16px;
          background-color: var(--button-color);
          border: none;
          cursor: pointer;
        }
      }
    }
  }
`;

export const Product = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  padding: 12px;
  color: var(--dark-text-color);
  background-color: #fff;
  text-align: center;
  overflow: hidden;
  cursor: pointer;

  .newProduct__image {
    position: relative;
    padding-top: 100%;
    width: 100%;

    & img {
      position: absolute;
      inset: 0px;
      margin: auto;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease;
    }
  }

  & h2 {
    margin-top: 16px;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover {
    & img {
      transform: scale(1.1);
    }

    h2 {
      color: #cf1322;
    }
  }

  .new_product-label {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px 8px;
    background-color: var(--primary-color);

    ::before {
      content: "";
      position: absolute;
      top: 0;
      right: 100%;
      border-width: 16px 8px 16px 0;
      border-style: solid;
      border-color: transparent var(--button-color);
    }

    span {
      color: #fff;
      font-size: 16px;
    }

    @media (max-width: 576px) {
      padding: 0 2px;
      ::before {
        border-width: 11px 8px 11px 0;
      }
      span {
        color: #fff;
        font-size: 14px;
      }
    }
  }
`;
