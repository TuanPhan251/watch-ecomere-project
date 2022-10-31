import styled from "styled-components";

export const ProductGiftWrapper = styled.div`
  margin-top: 12px;

  .product_gift-heading {
    display: inline-block;
    font-size: 16px;
    padding: 0 8px;
    color: #fff;
    background-color: var(--price-color);
  }
  .product_gift-list {
    list-style: none;
    padding: 8px;
    border-top: 2px solid var(--price-color);
  }
  .product_gift-item {
    font-size: 16px;
    margin: 8px 0;

    i {
      color: var(--price-color);
      margin-right: 4px;
      font-size: 20px;
    }

    span {
      margin-left: 4px;
    }
  }
`;
