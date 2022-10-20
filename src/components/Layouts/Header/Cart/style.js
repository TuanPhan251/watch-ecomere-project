import styled, { keyframes } from "styled-components";

export const CartItems = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 0 5px #595959;
  color: var(--dark-text-color);
  transform-origin: 95% top;
  z-index: 999;

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: -40px;
    height: 40px;
    width: 100%;
  }
`;

export const CartItemsContent = styled.div`
  padding: 8px;
  height: 360px;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1f1f1f;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  padding: 4px;
  margin-top: 8px;
  background-color: #fff;

  &:first-child {
    margin-top: 0;
  }
`;

export const ItemImage = styled.div`
  display: flex;
  align-items: center;
  width: 60px;

  & img {
    width: 40px;
  }

  & span {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export const ItemPrice = styled.div``;

export const ItemAction = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 8px;

  & i {
    padding: 4px;
    font-size: 24px;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const CartItemsAction = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 2px;
  background-color: #fff;

  & button {
    width: 100%;
    height: 48px;
    color: #fff;
    border: none;
    border-radius: 2px;
    background-color: #cf1322;

    font-size: 18px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      background-color: #a8071a;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;
