import styled from "styled-components";

export const BrandPageWrapper = styled.div`
  width: 1200px;
  margin: calc(var(--header-height) + 20px) auto 20px;
  background-color: #fff;

  .brand-container {
    display: flex;
    width: 100%;
    padding: 12px;
    .brand-item {
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
    }
  }
`;

export const TextBrandWrapper = styled.div`
  width: 70%;
  margin: 10px auto 30px;

  .text-content {
    text-align: center;
    font-size: 27px;
    font-family: "Times New Roman", Times, serif;
  }
`;

export const SearchBrandWrapper = styled.div`
  flex: 1;
  display: flex;
  margin: 0 0 10px 12px;
  align-items: center;

  & input {
    height: 36px;
    width: 400px;
    padding: 8px;
    margin-right: 4px;
    outline: none;
    border: none;
    border-radius: 20px;
    background-color: #f0f0f0;
    transition: all 0.2s ease;

    &:focus,
    &:active {
      border: none;
      background-color: #fff;

      outline: 2px solid #d9d9d9;
      box-shadow: var(--box-shadow);
    }
  }

  & button {
    padding: 4px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    & i {
      font-size: 18px;
    }
  }
`;

export const BrandFilterWrapper = styled.div`
  margin: 0 0 10px 2px;

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
