import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const AdminMainContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const MainContent = styled.div`
  transition: all 0.3s ease;
  min-height: 100vh;

  ${(props) =>
    props.showSidebar &&
    css`
      margin-left: 200px;
    `}
`;

export const LoadingWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;
