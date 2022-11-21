import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  .user_info-title {
    font-size: 20px;
    text-align: center;
  }
  .user_info-summary {
    width: 90%;
    margin: 0 auto;
    padding: 12px;
    border: var(--boder-basic);
    border-radius: 4px;

    p {
      font-size: 16px;
      color: var(--dark-text-color);

      span {
        font-weight: 500;
      }
    }
  }
`;

export const ProductsWrapper = styled.div`
  margin-top: 24px;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 2px;
  transition: all 0.3s ease;

  .product-image {
    position: relative;
    width: 100%;
    padding-top: 70%;

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease;
    }
  }

  .product-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    height: auto;
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
      padding: 6px;
      border: none;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.3s ease;
      cursor: pointer;

      i {
        color: #000;
        font-size: 18px;
        transition: all 0.3s ease;
      }

      :hover {
        background-color: var(--primary-color);

        i {
          color: #fff;
        }
      }
    }
  }

  :hover {
    box-shadow: 0 0 8px #ccc;
  }
`;
