import styled from "styled-components";
import { Tabs } from "antd";

export const Wrapper = styled.div`
  background-color: var(--bgr-color);
  padding-bottom: 24px;

  overflow: hidden;
`;

export const ProductDetailContainer = styled.section`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--header-height) + 24px) auto 0;
  padding: 12px;
  background-color: #fff;
  border-radius: 2px;

  @media (max-width: 576px) {
    margin: var(--header-height) 0 0;
  }
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  border: var(--boder-basic);

  & img {
    width: 100%;
  }

  .product_info-discount-label {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #fadb14;

    ::before {
      content: "";
      position: absolute;
      left: 0;
      top: 100%;
      border-width: 0px 30px 6px;
      border-style: solid;
      border-color: transparent rgb(250, 219, 20, 1);
    }

    span {
      font-size: 20px;
      color: var(--price-color);
      font-weight: 500;
    }
  }

  .product_like-icon {
    position: absolute;
    top: 10px;
    right: 10px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      background-color: transparent;
      border: none;
      border-radius: 50%;
      transition: all 0.3s ease;
      cursor: pointer;

      i {
        font-size: 30px;
      }

      :hover {
        background-color: #ddd;
      }
    }
  }

  @media (max-width: 576px) {
    margin-bottom: 8px;
  }
`;

export const ProductInfoWrapper = styled.div`
  border: var(--boder-basic);
  padding: 12px;
  border-radius: 4px;
`;

export const ProductSummary = styled.div`
  color: var(--dark-text-color);
  border-bottom: var(--boder-basic);

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  .product_rating {
    .product_rating-quantity {
      margin-left: 12px;
      color: var(--text-disabled);
    }
  }

  .product_summary-brand {
    margin: 8px 0;
    font-size: 16px;
    color: var(--dark-text-color);

    span {
      font-size: 18px;
      font-weight: 500;
      color: var(--price-color);
    }
  }

  .product_summary-gender {
    margin: 8px 0;
    font-size: 16px;
    color: var(--dark-text-color);

    a {
      font-size: 18px;
      font-weight: 500;
      color: var(--price-color);

      :hover {
        color: #a8071a;
      }
    }
  }

  .product_summary-price {
    margin: 8px 0 24px;
    color: var(--dark-text-color);
    text-align: left;
    font-size: 24px;
    font-weight: 500;

    .product_summary-price-original {
      margin-left: 12px;
      text-decoration: line-through;
      color: var(--text-disabled);
      font-size: 24px;
    }

    .product_summary-price-final {
      margin-left: 4px;
      color: var(--price-color);
      font-size: 32px;
    }

    @media (max-width: 576px) {
      .product_summary-price-original {
        font-size: 20px;
      }

      .product_summary-price-final {
        font-size: 28px;
      }
    }

    @media (max-width: 992px) {
      .product_summary-price-original {
        font-size: 20px;
      }

      .product_summary-price-final {
        font-size: 24px;
      }
    }
  }
`;

export const PolicyWrapper = styled.div`
  .product_policy-list {
    width: 100%;
    list-style: none;
    padding: 12px;
    background-color: #f5f5f5;
    border-radius: 4px;

    .product_policy-item {
      margin: 8px 0;

      & i {
        min-width: 30px;
        font-size: 20px;
      }

      & span {
        color: var(--dark-text-color);
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  .product_actions {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 4px;
  }
`;

export const ProductActions = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 12px;
  border-radius: 4px;

  button {
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: var(--button-color);
    color: #fff;
    font-size: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .product_action-addcart {
    display: flex;

    .product_action-addcart-quantity {
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: 16px;
        margin-right: 8px;
      }

      button {
        width: 30px;
        background-color: #fff;
        color: var(--dark-text-color);
        border: var(--boder-basic);
      }

      input {
        outline: none;
        display: block;
        margin: 0 4px;
        width: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        border: var(--boder-basic);
        border-radius: 2px;
      }
    }

    .product_action-addcart-btn {
      flex: 1;
      margin-left: 24px;
    }

    @media (max-width: 576px) {
      flex-wrap: wrap;
      .product_action-addcart-quantity {
        width: 100%;
      }

      .product_action-addcart-btn {
        margin: 8px 0;
      }
    }
  }
`;

//product spec section

export const BottomWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  border-top: var(--boder-basic);

  @media (max-width: 576px) {
    margin: 0;
  }
`;

export const ProductContent = styled.div`
  width: 100%;

  .product_content-heading {
    display: inline-block;
    text-align: center;
    padding: 8px;
    color: #fff;
    background-color: var(--price-color);
    font-size: 20px;
  }

  .product_content-main {
    max-height: 500px;
    overflow: auto;

    p {
      font-size: 16px;
    }

    img {
      width: 100%;
      height: auto;
    }

    &::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #595959;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }
  }
`;

export const ProductReview = styled.div`
  height: 500px;
`;

export const InfoTabs = styled(Tabs)`
  margin-top: 24px;
  padding: 0 12px;

  .ant-tabs-nav {
    border-bottom: 2px solid var(--price-color);
  }

  .ant-tabs-tab {
    padding: 4px 8px !important;
    background-color: #fff !important;
    font-size: 16px !important;
    color: var(--dark-text-color) !important;
    border: none !important;
  }

  .ant-tabs-tab.ant-tabs-tab-active {
    background-color: var(--price-color) !important;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fff;
  }
`;