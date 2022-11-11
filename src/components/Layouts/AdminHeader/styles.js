import styled from "styled-components";

export const AdminHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: #434343;
  color: #fff;

  .admin_header-sidebar-btn {
    width: 40px;
    height: 40px;
    margin: 0 12px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    :hover i {
      opacity: 0.8;
    }

    i {
      font-size: 20px;
    }
  }

  .admin_header-heading {
    margin: 0;
    text-transform: uppercase;
    color: #fff;
  }

  .admin_header-account {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-left: auto;
    margin-right: 24px;
    cursor: pointer;

    h3 {
      color: #fff;
      margin: 0 12px 0 auto;
    }

    i {
      font-size: 16px;
    }

    .account_dropdown-wrapper {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      top: 100px;
      right: 0;
      width: 200px;
      padding: 8px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 0 8px #ddd;
      z-index: 99;
      transition: all 0.3s ease;
      transition-delay: 0.1s;

      ::before {
        content: "";
        position: absolute;
        top: -30px;
        right: 0;
        width: 100%;
        height: 30px;
        background-color: transparent;
        z-index: 99;
      }
    }

    :hover {
      .account_dropdown-wrapper {
        visibility: visible;
        opacity: 1;
        top: 52px;
      }
    }
  }
`;
