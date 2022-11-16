import { Button, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 2px solid #000;
  background-color: #000;
  color: #fff;
  overflow: hidden;

  .footer-container {
    margin: 20px auto 0;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
  }
`;
export const RowFooter = styled(Row)`
  .brand-footer {
    @media (min-width: 576px) and (max-width: 991px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .email-form {
      @media (min-width: 576px) and (max-width: 991px) {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

export const ColFooter = styled(Col)`
  @media (min-width: 768px) and (max-width: 991px) {
    width: 200px;
  }
`;
// ------ Phần tử con ------
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 80%;
  margin-bottom: 20px;

  & p {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 0;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    margin: 0 auto 20px;
  }
`;

export const InputFooter = styled(Input)`
  background-color: rgba(255, 255, 255, 0);
  width: 200px;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
`;
export const ButtonFooter = styled(Button)`
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  margin-left: 20px;
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
