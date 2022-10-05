import styled from "styled-components";
import { BackTop } from "antd";

export const BackTopButton = styled(BackTop)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  background-color: #f5f5f5;

  & i {
    font-size: 14px;
    color: #000;
  }
`;

export const HomePageWrapper = styled.main`
  margin-bottom: 30px;
`;
