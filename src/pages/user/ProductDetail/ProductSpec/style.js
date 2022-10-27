import styled from "styled-components";

export const ProductSpecContainer = styled.div`
  width: 100%;
  padding: 32px 16px;
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
    background-color: #f5f5f5;
  }
`;

export const ProductSpecItem = styled.li`
  display: flex;
  justify-content: space-around;
  padding: 4px 8px;
  margin: 4px 0;
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
