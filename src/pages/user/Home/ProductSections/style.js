import styled from "styled-components";

export const HomeProductWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  height: 100%;
  padding: 12px;
  background-color: #fff;

  .products-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Product = styled.div`
  flex: 1;
  height: 100%;
  padding: 12px;
  color: var(--dark-text-color);
  text-align: center;
  overflow: hidden;
  cursor: pointer;

  & h2 {
    margin-top: 16px;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & img {
    width: 75%;
    transition: all 0.2s ease;
  }

  &:hover {
    & img {
      transform: scale(1.05);
    }

    h2 {
      color: #cf1322;
    }
  }
`;
