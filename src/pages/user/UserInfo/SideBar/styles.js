import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bgr-color);
  padding-bottom: 12px;
`;

export const TopSpacer = styled.div`
  width: 100%;
  height: var(--header-height);
`;

export const UserPageContent = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  margin: 12px auto;
`;

export const UserSideBar = styled.div`
  border-right: 1px solid #ddd;
  background-color: #fff;

  .user__avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
  }

  .user_sidebar {
    list-style: none;
  }

  .user_sidebar-item-link {
    color: var(--dark-text-color);
  }

  .user_sidebar-item {
    padding: 8px;
    i {
      font-size: 16px;
      width: 20px;
    }
  }
`;

export const UserSidebarItem = styled.li`
  ${(props) =>
    props.$active &&
    css`
      border-right: 4px solid rgb(51, 92, 103);
      background-color: rgb(51, 92, 103, 0.3);

      .user_sidebar-item-link {
      }
    `}
`;
