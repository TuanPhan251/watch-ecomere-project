import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  border-top: 2px solid #000;
  background-color: #000;
  color: #fff;

  .footer-container {
    margin: 20px auto 0;
    width: 90%;
  }
`;

// ------ Phần tử con ------
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 80%;

  & p {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0;
  }
`;

export const InputFooter = styled(Input)`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
`;
export const ButtonFooter = styled(Button)`
  background-color: #fff;
  color: #000;
  border-radius: 5px;
`;
export const LinkFooter = styled(Link)`
  margin-top: 10px;
  font-size: 14px;
  color: #fff;
`;
export const TextLabel = styled.p`
  font-size: 35px;
  font-family: "Brush Script MT";
  margin-bottom: 40px;
`;
