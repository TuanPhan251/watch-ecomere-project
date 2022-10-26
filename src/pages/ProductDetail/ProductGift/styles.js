import styled from "styled-components";

export const ProductGiftWrapper = styled.div`
  border: var(--boder-basic);

  .product_gift-heading {
    font-size: 20px;
    padding: 8px;
    color: #fff;
    background-color: #009432;
  }
  .product_gift-list {
    list-style: none;
    padding: 8px;
  }
  .product_gift-item {
    font-size: 16px;
    margin: 8px 0;

    i {
      color: #009432;
      margin-right: 4px;
      font-size: 20px;
    }
  }
`;
