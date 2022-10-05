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
  margin: auto;

  & img {
    width: 100%;
  }
`;

export const ProductSummary = styled.div``;

export const ProductSummaryItem = styled.p`
  margin: 8px 0;
  font-size: 16px;
  color: var(--dark-text-color);
`;

export const ProductPrice = styled.p`
  margin: 8px 0 16px;
  color: var(--dark-text-color);
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

export const PolicyActionWrapper = styled.div`
  display: flex;
`;

export const ProductPolicy = styled.ul`
  width: 70%;
  list-style: none;
  margin: -8px 0;
`;

export const ProductPolicyItem = styled.li`
  margin: 8px 0;

  & i {
    min-width: 26px;
    font-size: 16px;
  }

  & span {
    color: var(--dark-text-color);
    font-size: 16px;
  }
`;

export const ProductAction = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
`;

//product spec section

export const ProductSpecContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  background-color: #fff;
`;

export const ProductSpecHeading = styled.h3`
  width: 100%;
  margin-bottom: 32px;
  text-align: center;
  color: var(--dark-text-color);
  font-size: 26px;
  text-transform: uppercase;
`;

export const ProductSpecCol = styled.ul`
  list-style: none;
  margin: -4px 0;

  & li:nth-child(2n + 1) {
    background-color: #ccc;
  }
`;

export const ProductSpecItem = styled.li`
  display: flex;
  padding: 4px 8px;
  margin: 4px 0;
  font-size: 16px;
  color: var(--dark-text-color);
  font-weight: 400;

  & span:first-child {
    width: 30%;
    font-weight: 500;
  }

  & span:last-child {
    width: 50%;
    text-align: right;
  }
`;
