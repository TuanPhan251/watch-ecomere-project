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

export const MobileFilterDrawer = styled.div``;

export const MobileFilterList = styled.ul`
  list-style: none;

  .mobile_filter-item {
    margin: 12px 0;
    font-size: 16px;

    span {
      font-size: 16px;
      line-height: 200%;
    }
  }
`;

export const MobileFilterAction = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 4px 8px;
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 2px;
    background-color: var(--button-color);
  }
`;

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  padding-bottom: 24px;
  overflow: hidden;
`;

export const ProductPageWrapper = styled.div`
  margin: 24px 24px 0 24px;
  border-radius: 4px;
  background-color: #fff;

  .product_filter-wrapper {
    height: 100%;
    padding: 12px;
    border: var(--boder-basic);

    .product_filter-title {
      font-size: 16px;
      font-weight: 500;
      border-bottom: var(--boder-basic);

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
    position: relative;
    transition: all 0.2s ease;

    img {
      width: 100%;
    }
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
    right: 0;
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

  .product_info-discount-label {
    content: "";
    position: absolute;
    top: 0;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color: #fadb14;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 100%;
      border-width: 0px 18px 4px;
      border-style: solid;
      border-color: transparent rgb(250, 219, 20, 1);
    }

    span {
      color: var(--price-color);
      font-weight: 500;
    }
  }

  &:hover {
    box-shadow: 0 0 8px #ccc;

    .product_info-image {
      transform: translateY(-5px);
    }

    .product_item-actions {
      right: 0;
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
    border-radius: 2px;
    background-color: #f0f0f0;
    transition: all 0.2s ease;

    &:focus,
    &:active {
      border: none;
      background-color: #fff;

      outline: 1px solid #061178;
      box-shadow: 0 0 5px #061178;
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

export const HeadingFilterWrapper = styled.div`
  display: flex;
  align-items: center;

  .mobile_filter-show-btn {
    display: none;
    padding: 4px;
    outline: none;
    border: none;
    border-radius: 2px;
    background-color: #fff;
    font-size: 16px;

    i {
      font-size: 20px;
    }

    @media (max-width: 868px) {
      display: inline-block;
      margin-left: auto;
    }
  }
`;
