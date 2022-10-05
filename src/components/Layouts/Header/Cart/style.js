import styled, { keyframes } from "styled-components";

const Growth = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CartItems = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: #f5f5f5;
  box-shadow: 0 0 5px #595959;
  color: var(--dark-text-color);
  animation: ${Growth} 0.2s ease-in;
  transform-origin: 95% top;
  z-index: 999;

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: -8px;
    right: 4px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-bottom: 10px solid #f5f5f5;
  }

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: -10px;
    height: 10px;
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
    }
  }
`;
