import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bgr-color);
  padding-bottom: 12px;
`;

export const TopSpacer = styled.div`
  width: 100%;
  height: var(--header-height);
`;

export const UserPageContent = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  margin: 12px auto;
`;

export const UserInfo = styled.div`
  min-height: 500px;
  padding: 12px;
  background-color: #fff;

  .user_info-title {
    font-size: 20px;
    text-align: center;
  }
`;

export const ProductsWrapper = styled.div`
  margin-top: 40px;
`;

export const ProductItem = styled.div`
  position: relative;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 2px;
  transition: all 0.3s ease;

  .product-image {
    display: flex;
    padding: 4px;
    justify-content: center;

    img {
      width: 60%;
    }
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4px;
    color: var(--dark-text-color);
    background-color: rgba(51, 92, 103, 0.1);

    h3 {
      text-align: center;
      font-size: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    p {
      color: var(--primary-color);
      font-size: 16px;
      font-weight: 500;
    }
  }

  .product-action {
    position: absolute;
    top: 10px;
    right: 10px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      border: none;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.3s ease;
      cursor: pointer;

      i {
        color: #000;
        font-size: 18px;
      }

      :hover {
        background-color: #ddd;
      }
    }
  }

  :hover {
    box-shadow: 0 0 8px #ccc;
  }
`;
