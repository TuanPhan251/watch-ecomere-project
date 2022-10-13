import { Link } from "react-router-dom";
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

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: var(--header-height);
  width: 100%;
  padding: 0 80px;
  border-bottom: ${(props) =>
    props.backgroundColor ? "1px solid #8c8c8c" : "none"};
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.backgroundColor ? "#fff" : "transparent"};
  z-index: 99;
`;

export const HeaderLogo = styled.div`
  width: 80px;

  h2 {
    font-family: "Charmonman", cursive;
  }
`;

export const HeaderNav = styled.ul`
  height: 100%;
  margin: 0;
  list-style: none;
  display: flex;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 120px;
    margin: 0 8px;

    &:hover {
      background-color: #ccc;
    }
    &:hover .dropdown-container {
      display: inline-block !important;
    }
    & a {
      display: block;
      min-width: 100px;
      padding: 8px;
      text-align: center;
      font-weight: 500;
      color: var(--dark-text-color);
      text-decoration: none;

      &:hover {
        color: red;
        text-decoration: none;
      }
    }
  }
`;

export const HeaderSearchContainer = styled.div`
  flex: 1;
  display: flex;
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

export const HeaderRight = styled.div`
  .userName {
    font-size: 17px;
  }
  & a {
    display: block;
    min-width: 60px;
    padding: 8px;
    text-align: center;
    font-weight: 500;
    color: var(--dark-text-color);
    text-decoration: none;

    &:hover {
      color: red;
      text-decoration: underline;
    }
  }
`;

export const CartItemsWrapper = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  width: 500px;
`;

export const HeaderCart = styled.div`
  position: relative;
  padding: 4px;
  cursor: pointer;

  & i {
    font-size: 20px;
  }

  &:hover ${CartItemsWrapper} {
    display: block;
  }
`;
export const DropDownMenuWrapperTH = styled.div`
  position: relative;
  display: inline-block;

  .title-link:hover .dropdown-container {
    display: inline-block !important;
  }

  .dropdown-container {
    z-index: 1;
    display: none;
    position: absolute;
    top: 59px;
    left: -6px;
    min-width: 500%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background-color: #fff;

    .dropdown-content {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 10px;

      & div {
        display: flex;
        flex-direction: column;

        .dropdown-list {
          display: flex;
          flex-direction: column;

          .dropdown-item {
            display: flex !important;
            justify-content: flex-start !important;
            margin-bottom: 8px !important;
          }
          .dropdown-item:hover {
            background-color: #fff !important;
          }
        }
      }
    }
  }
`;

export const ItemLink = styled(Link)`
  padding: 0 !important;
  text-align: start !important;
  font-size: 14px !important;
`;
