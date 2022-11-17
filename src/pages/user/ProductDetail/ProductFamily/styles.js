import styled from "styled-components";

export const ProductFamilyWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-top: 24px;
  padding: 12px;
  background-color: #fff;

  .product_family-heading {
    font-size: 24px;
    text-align: center;
  }
`;

export const ProductsWrapper = styled.div`
  padding: 24px 12px;
`;

export const ProductItem = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  padding: 4px;
  color: var(--dark-text-color);
  text-align: center;
  border-radius: 2px;
  border: var(--boder-basic);
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
    width: 100%;
    padding-top: 80%;
    transition: all 0.3s ease;

    img {
      position: absolute;
      inset: 0px;
      height: 100%;
      margin: auto;
      object-fit: cover;
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

  .product_info-isNew-label {
    position: absolute;
    top: 10px;
    right: 0;
    padding: 4px 8px;
    height: 24px;
    padding: 0 4px;
    background-color: var(--button-color);
    color: #fff;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      right: 100%;
      border-width: 12px 6px 12px 0;
      border-style: solid;
      border-color: transparent var(--button-color);
    }
  }

  &:hover {
    .product_info-image {
      transform: translateY(-5px);
    }

    .product_info-name {
      color: var(--primary-color);
    }
  }
`;
