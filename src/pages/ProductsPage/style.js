import styled from "styled-components";

export const ProductPageWrapper = styled.div`
  width: 90%;
  margin: calc(var(--header-height) + 20px) auto 20px;
  background-color: #fff;
`;

export const ProductBrands = styled.div`
  display: flex;
  width: 100%;
  padding: 12px;
`;

export const ProductBrandItem = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  border: 1px solid #ddd;
  border-collapse: collapse;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffd591;
    box-shadow: var(--box-shadow);
    z-index: 99;
  }
`;

export const ProductFilterWrapper = styled.div`
  padding: 12px;

  border-bottom: 1px solid #f5f5f5;
`;

export const ProductsWrapper = styled.div`
  padding: 12px;
`;

export const ProductItem = styled.div`
  flex: 1;
  height: 100%;
  padding: 8px;
  color: var(--dark-text-color);
  text-align: center;
  border: 1px solid #f5f5f5;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;

  & h2 {
    font-size: 0.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & img {
    top: 0;
    width: 100%;
    transition: all 0.2s ease;
  }

  &:hover {
    box-shadow: 0 0 8px #ccc;

    & img {
      transform: translateY(-5px);
    }
  }
`;
