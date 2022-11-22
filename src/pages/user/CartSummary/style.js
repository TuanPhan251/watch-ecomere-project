import styled from "styled-components";
import { Row, Table } from "antd";

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: row; */
  margin-top: var(--header-height);
  min-height: 100vh;
  background-color: var(--bgr-color);
  padding: 24px 0;
  justify-content: center;
`;

export const CheckoutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const StepContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 12px;
  margin: 12px auto;
  background-color: #fff;
  padding: 12px;
`;

export const CheckoutCartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 12px;
  height: 100%;
  min-height: 100vh;
  background-color: #fff;
  border-radius: 2px;

  .cart_summary-heading {
    color: var(--dark-text-color);
    font-size: 28px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
  }
  .cart-item-wrapper {
    .cart-item-tbody {
      padding: 4px 12px 0;
      box-shadow: 0 0 4px #ddd;
    }
  }

  .cart_summary-discount {
    justify-self: center;
    width: 100%;
    min-height: 40px;

    margin-bottom: 10px;
  }
  .cart_summary {
    justify-self: center;
    position: sticky;
    top: 20%;
    right: 0;
    min-height: 200px;
    margin: auto;
    padding: 12px 10px 12px 12px;
    border-radius: 2px;
    box-shadow: 0px 0px 4px #ddd;

    h3 {
      font-size: 20px;
      margin-bottom: 24px;
    }

    .cart_total-price {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color: var(--price-color);

      .cart_total-price-title {
        color: var(--dark-text-color);
      }
    }

    .cart_shipping-cost {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
      margin-bottom: 24px;
      font-size: 18px;
      color: var(--price-color);

      .cart_shipping-cost-title {
        color: var(--dark-text-color);
      }
    }

    .cart_price-total {
      display: flex;
      justify-content: space-between;
      padding-top: 24px;
      border-top: 1px solid #ccc;

      .cart_price-total-title {
        font-size: 18px;
      }

      .cart_price-total-amount {
        font-size: 18px;
        color: var(--price-color);
      }
    }

    .cart_summary-action {
      margin-top: 24px;

      button {
        width: 100%;
        padding: 4px 0;
        border: none;
        border-radius: 4px;
        background-color: var(--button-color);
        color: #fff;
        font-size: 20px;
        transition: all 0.3s ease;
        cursor: pointer;

        :hover {
          opacity: 0.8;
        }
      }
    }

    @media (max-width: 768px) {
      justify-self: center;
      position: block;
      width: 100%;
    }
  }

  .cart-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      text-align: center;
    }
  }

  @media (max-width: 576px) {
    margin: 0;
  }
`;

export const CartItem = styled(Row)`
  display: flex;
  margin: 8px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;

  :last-child {
    border-bottom: none;
  }

  .item-img {
    position: relative;
    width: 100%;
    padding-top: 100%;

    img {
      position: absolute;
      inset: 0;
      height: 100%;
      margin: auto;
      object-fit: cover;
      padding: 4px;
      border: 1px solid #eee;
      border-radius: 2px;
    }
  }

  .item-action {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-left: 4px;

    .item_name {
      color: var(--dark-text-color);
      font-size: 18px;
      font-weight: 500;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
    }
    button {
      width: fit-content;
      padding: 4px 8px;
      background-color: #fff;
      transition: all 0.3s ease;
      border: none;
      border-radius: 2px;
      cursor: pointer;

      i {
        transition: all 0.3s ease;
        font-size: 18px;
      }

      span {
        margin-left: 4px;
        transition: all 0.3s ease;
        font-size: 16px;
      }

      :hover {
        background-color: var(--button-color);
        span,
        i {
          color: #fff;
        }
      }
    }

    @media (max-width: 576px) {
      .item_name {
        font-size: 16px;
      }
    }
  }

  .item_info-right-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .item-quantity {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-left: auto;

      input {
        justify-content: center;
        border: var(--boder-basic);
        outline: none;
        width: 40px;
        padding: 4px;
        margin: 0 4px;
        text-align: center;
        font-size: 16px;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 100%;
        padding: 4px 8px;
        background-color: #fff;
        border: 1px solid #ddd;
        font-size: 16px;
        border-radius: 4px;
        transition: all 0.3s ease;
        cursor: pointer;

        :hover {
          color: #fff;
          background-color: var(--button-color);
        }
      }
    }

    .item_price {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;

      .item_price-original {
        font-size: 16px;

        margin-right: 4px;
        text-decoration: line-through;
        color: #ccc;
      }

      .item_price-final {
        font-size: 24px;
        color: var(--price-color);
      }

      .item_price-discount {
        width: 100%;
        font-size: 16px;
        text-align: right;

        span {
          color: var(--primary-color);
          font-weight: 500;
        }
      }
    }

    @media (max-width: 576px) {
      .item-quantity {
        p {
          display: block;
          width: 100%;
        }

        input {
          width: 30px;
          height: fit-content;
        }

        button {
          width: 30px;
          height: 100%;
          /* height: fit-content; */

          i {
            font-size: 12px;
          }
        }
      }

      .item_price {
        .item_price-original {
          font-size: 14px;

          margin-right: 4px;
          text-decoration: line-through;
          color: #ccc;
        }

        .item_price-final {
          font-size: 18px;
          color: var(--price-color);
        }

        .item_price-discount {
          width: 100%;
          font-size: 14px;
          text-align: right;

          span {
            color: var(--primary-color);
            font-weight: 500;
          }
        }
      }
    }
  }
`;

//info

export const CartInfoSummary = styled.div`
  margin-bottom: 12px;
`;

//payment

export const TableCustom = styled(Table)`
  .ant-table-content {
    &::-webkit-scrollbar {
      height: 8px !important;
      background-color: #fafafa !important;
    }

    &::-webkit-scrollbar-thumb {
      cursor: pointer;
      background-color: #aaa !important;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
      background-color: #fafafa !important;
    }
  }
`;
