import styled, { keyframes } from "styled-components";

const hydrate = keyframes`
  from {
    bottom: -100px;
    opacity: 0;
    visibility: hidden;
  }
  to {
    bottom: 0;
    opacity: 1;
    visibility: visible;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ProductPageWrapper = styled.div`
  width: 90%;
  margin: calc(var(--header-height) + 20px) auto 20px;
  background-color: #fff;

  .product_filter-wrapper {
    height: 100%;
    padding: 12px;
    border: var(--boder-basic);

    .product_filter-title {
      font-size: 16px;
      font-weight: 500;

      i {
        margin: 0 12px 0 12px;
        font-size: 20px;
      }
    }
  }
`;

export const ProductBrands = styled.div`
  display: flex;
  width: 100%;
  padding: 12px;
`;

export const PageBannerWrapper = styled.div`
  position: relative;
  margin-top: var(--header-height);
  width: 100%;
  padding-top: 30%;

  img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h2 {
    position: absolute;
    right: 50%;
    bottom: 0;
    width: 100%;
    margin-bottom: 20px;
    transform: translateX(50%);
    text-transform: uppercase;
    text-align: center;
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 10px;
    color: #fff;
    opacity: 0.5;
    text-shadow: 0px 0px 10px #262626;
    animation: ${hydrate} 1s ease;
    z-index: 2;
  }

  .overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50%;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(0, 0, 0, 0.8)
    );
    animation: ${fadeIn} 1s ease;
    z-index: 1;
  }
`;

export const ProductFilterWrapper = styled.div`
  padding: 12px;

  border-bottom: 1px solid #f5f5f5;
`;

export const ProductsWrapper = styled.div`
  padding: 12px;
`;

export const ProductItem = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  padding: 8px;
  color: var(--dark-text-color);
  text-align: center;
  border: var(--boder-basic);
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;

  & .product_info-name {
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & .product_info-image {
    top: 0;
    width: 100%;
    transition: all 0.2s ease;
  }

  .product_info-price-original {
    color: var(--text-disabled);
    text-decoration: line-through;
  }

  .product_info-price-final {
    color: var(--price-color);
    font-size: 20px;
  }

  .product_item-actions {
    opacity: 0;
    position: absolute;
    top: 50%;
    right: 10px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;

    .product_item-actions-btn {
      padding: 8px;
      margin-bottom: 4px;
      border: none;
      border-radius: 50%;
      transition: all 0.3s ease;
      cursor: pointer;

      i {
        font-size: 24px;
      }

      :hover {
        background-color: #ff7875;

        i {
          color: #fff;
        }
      }
    }
  }
  &:hover {
    box-shadow: 0 0 8px #ccc;

    .product_info-image {
      transform: translateY(-5px);
    }

    .product_item-actions {
      right: 10px;
      opacity: 1;
      transform: translateY(-50%);
    }
  }
`;
export const SearchBrandWrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 0 0 10px 0;
  align-items: center;

  & input {
    height: 36px;
    width: 100%;
    padding: 8px;
    margin-right: 4px;
    outline: none;
    border: none;
    border-radius: 20px;
    background-color: #f0f0f0;
    transition: all 0.2s ease;

    &:focus,
    &:active {
      border: none;
      background-color: #fff;

      outline: 2px solid #d9d9d9;
      box-shadow: var(--box-shadow);
    }
  }

  & button {
    padding: 4px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    & i {
      font-size: 18px;
    }
  }
`;
