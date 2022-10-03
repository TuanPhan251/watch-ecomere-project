import styled from "styled-components";

export const CasioSectionWrapper = styled.div`
  position: relative;
  width: 1200px;
  margin: 24px auto 0;
  background-color: #2e2e2e;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProductWrapper = styled.aside`
  width: 800px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  right: 50px;
  padding: 8px;
  transform: translateY(-50%);
  border-radius: 10px;
  overflow: hidden;
`;

export const Product = styled.div`
  flex: 1;
  height: 100%;
  padding: 8px;
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
