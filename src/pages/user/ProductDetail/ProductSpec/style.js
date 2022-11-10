import styled from "styled-components";

export const ProductSpecContainer = styled.div`
  width: 100%;
  padding: 24px 16px;
`;

export const ProductSpecHeading = styled.h3`
  display: inline-block;
  padding: 4px 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  background-color: var(--price-color);
`;

export const ProductSpecCol = styled.ul`
  list-style: none;
  border-top: 2px solid var(--price-color);

  & li:nth-child(2n + 1) {
    background-color: #f5f5f5;
  }
`;

export const ProductSpecItem = styled.li`
  display: flex;
  justify-content: space-around;
  padding: 8px;
  font-size: 16px;
  color: var(--dark-text-color);
  font-weight: 400;

  & span:first-child {
    width: 50%;
    font-weight: 500;
  }

  & span:last-child {
    width: 50%;
    text-align: right;
  }
`;
