import styled from "styled-components";

export const AdminHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-image: linear-gradient(to right, #135200, #254000);
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
    color: #fff;
    margin: 0 12px 0 auto;
  }
`;
