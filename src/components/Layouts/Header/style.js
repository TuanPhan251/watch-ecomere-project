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
  box-shadow: 0 0 10px #595959;
  transition: all 0.2s ease;
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
      box-shadow: var(--box-shadow);
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
          background-color: #fff;
          transition: all 0.3s ease;

          :hover {
            background-color: #fffbe6;
            text-decoration: none;
          }

          :last-child {
            background-color: #cf1322;
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
  top: 200px;
  right: 0;
  width: 500px;
  transition: all 0.3s ease;
`;

export const HeaderCart = styled.div`
  position: relative;
  padding: 4px;
  cursor: pointer;

  & i {
    font-size: 20px;
  }

  &:hover ${CartItemsWrapper} {
    opacity: 1;
    visibility: visible;
    top: calc(100% + 30px);
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
