import styled, { css } from "styled-components";

export const AdminMainContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const MainContent = styled.div`
  transition: all 0.3s ease;

  ${(props) =>
    props.showSidebar &&
    css`
      margin-left: 200px;
    `}
`;
