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
  padding: 0 20px;
  border-bottom: ${(props) =>
    props.backgroundColor ? "1px solid #8c8c8c" : "none"};
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.backgroundColor ? "#fff" : "transparent"};
  /* color: ${(props) => (props.backgroundColor ? "#fff" : "#000")}; */
  z-index: 99;

  @media (max-width: 876px) {
    padding: 0;
  }
`;

export const HeaderLogo = styled.div`
  width: 80px;

  h2 {
    font-family: "Charmonman", cursive;
  }

  @media (max-width: 876px) {
    margin-right: auto;
  }
`;

export const HeaderNav = styled.ul`
  display: flex;
  height: 100%;
  margin: 0 auto 0 0;
  list-style: none;

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

  @media (max-width: 876px) {
    display: none;
  }
`;

export const HeaderNavMobile = styled.div`
  display: none;

  .mobile-header_icon {
    display: flex;
    justify-content: center;
    width: 40px;
    cursor: pointer;
  }

  @media (max-width: 876px) {
    display: unset;
  }
`;

export const HeaderNavMobileList = styled.ul`
  list-style: none;
  margin: -24px;

  li {
    display: block;
    width: 100%;

    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 16px 20px;
      font-weight: 500;
      text-align: center;
      color: var(--dark-text-color);
      transition: all 0.3s ease;

      :hover {
        background-color: #ddd;
      }
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

  @media (max-width: 868px) {
    :hover ${CartItemsWrapper} {
      display: none;
    }
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
