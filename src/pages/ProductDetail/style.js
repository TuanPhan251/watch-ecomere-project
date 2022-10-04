import styled from "styled-components";

export const ProductDetailContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 12px;
  margin: calc(var(--header-height) + 60px) auto 0;
  background-color: #fff;
  border-radius: 2px;
`;

export const ProductImageWrapper = styled.div`
  width: 300px;

  & img {
    width: 100%;
  }
`;

export const ProductPriceWrapper = styled.div`
  & p {
    margin: 0;
    color: var(--dark-text-color);
    text-align: center;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const ProductPriceAction = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 8px;
  margin-top: 12px;
  border: 1px solid black;
  border-radius: 4px;
`;
