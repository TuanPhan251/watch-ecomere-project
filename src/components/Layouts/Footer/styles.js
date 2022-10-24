import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  border-top: 2px solid #000;
  background-color: #090909;
  color: #fff;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px auto 0;
  width: 70%;
`;

// ------ Phần tử con ------
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  width: 15%;
  min-height: 80%;

  & p {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0;
  }
`;

export const TextLabel = styled.p`
  font-size: 25px;
  font-family: "Brush Script MT";
  margin-bottom: 10px;
`;

export const IconCopyRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkFooter = styled(Link)`
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  color: #fff;
`;

export const LinkFooterInfo = styled.a`
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  color: #fff;
`;
