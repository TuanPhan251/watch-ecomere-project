import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 80%;
  margin: 120px auto 0;
`;

export const ContactPageWrapper = styled.div`
  height: 700px;
`;

export const ContactPageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const ContactPageTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

export const ContactPageItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

export const TextListItem = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 17px;
  margin-bottom: 0;
`;

export const LinkFooter = styled(Link)`
  font-family: "Times New Roman", Times, serif;

  font-size: 17px;
  color: #000;
`;
