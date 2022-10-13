import styled from "styled-components";

export const HomePageWrapper = styled.main`
  margin-bottom: 30px;

  .header_img-wrapper {
    max-width: 100%;

    img {
      width: 100%;
      max-height: 100vh;
      object-fit: cover;
    }
  }

  .men_products-section {
    display: flex;
    height: 100%;
    margin: 80px 0;

    .men_products-banner-img {
      width: 50%;
      position: relative;

      img {
        width: 100%;
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

    .women_products-banner-img {
      position: relative;
      width: 50%;

      img {
        width: 100%;
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
    font-weight: bold;
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
    background-color: #cf1322;
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
`;
