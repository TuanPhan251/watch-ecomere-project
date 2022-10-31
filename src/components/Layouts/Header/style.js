import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: var(--header-height);
  width: 100%;
  padding: 0 20px;
  transition: all 0.2s ease;
  background-color: #000;
  z-index: 99;

  @media (max-width: 876px) {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const HeaderLogo = styled.div`
  width: 80px;

  h2 {
    font-family: "Charmonman", cursive;
    color: #fff;
  }

  @media (max-width: 876px) {
    margin-right: auto;
  }
`;

export const HeaderNav = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;

  .title-link {
    display: block;
    line-height: var(--header-height);
    width: 100%;
    padding: 0;
  }

  & li {
    display: inline-block;
    margin: 0 8px;
    height: 100%;

    &:hover {
      cursor: pointer;
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
      color: #fff;
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

    i {
      color: #fff;
    }
  }

  @media (max-width: 876px) {
    display: unset;
  }
`;

export const HeaderNavMobileList = styled.ul`
  list-style: none;
  margin: -24px;
  background-color: #000;

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
      color: #fff;
      transition: all 0.3s ease;

      :hover {
        background-color: #ddd;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  .userName {
    color: #fff;
    font-size: 17px;
  }

  & a {
    display: block;
    min-width: 60px;
    padding: 8px;
    text-align: center;
    font-weight: 500;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: red;
      text-decoration: underline;
    }
  }

  @media (max-width: 576px) {
    margin-right: 12px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .user_icon {
    position: relative;

    i {
      margin-left: 4px;
      padding: 4px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }

    .user_info-wrapper {
      position: absolute;
      top: 100px;
      right: 0;
      width: 300px;
      padding: 12px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 8px #ccc;
      transition: all 0.3s ease;
      transition-delay: 0.2s;
      opacity: 0;
      visibility: hidden;

      ::before {
        display: block;
        content: "";
        width: 100px;
        height: 40px;
        position: absolute;
        top: -40px;
        right: 0;
        background-color: transparent;
      }

      .user_info-img {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          margin-top: 4px;
          font-size: 16px;
        }
      }

      .user_actions {
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        .user_actions-btn {
          margin-top: 4px;
          cursor: pointer;
          border: none;
          font-size: 16px;
          color: var(--dark-text-color);
          background-color: #fff;
          transition: all 0.3s ease;

          :hover {
            background-color: #fffbe6;
            text-decoration: none;
          }

          :last-child {
            border-radius: 4px;
            background-color: var(--button-color);
            color: #fff;

            :hover {
              background-color: #a8071a;
            }
          }
        }
      }
    }
  }

  :hover .user_info-wrapper {
    visibility: visible;
    opacity: 1;
    top: calc(100% + 30px);
  }
`;

export const CartItemsWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 100px;
  right: 0;
  width: 500px;
  transition: all 0.3s ease;
  transition-delay: 0.2s;
`;

export const HeaderCart = styled.div`
  position: relative;
  padding: 4px;
  margin-right: 8px;
  cursor: pointer;

  & i {
    color: #fff;
    font-size: 20px;
  }

  &:hover ${CartItemsWrapper} {
    opacity: 1;
    visibility: visible;
    top: calc(100% + 30px);
  }

  @media (max-width: 576px) {
    margin-right: 0;
  }

  @media (max-width: 868px) {
    :hover ${CartItemsWrapper} {
      display: none;
    }
  }
`;
export const DropDownMenuWrapperTH = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;

  .dropdown-container {
    z-index: 1;
    display: none;
    position: absolute;
    top: 59px;
    left: -53px;
    min-width: 600%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background-color: #fff;

    .dropdown-content {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
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
  color: #000 !important;
`;
