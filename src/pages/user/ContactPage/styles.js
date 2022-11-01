import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 80%;
  margin: 120px auto 100px;
`;

export const ContactPageWrapper = styled.div`
  /* height: 700px; */
`;

export const ContactPageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  .contact-title {
    font-size: 30px;
    font-weight: 700;
  }

  .contact-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
  }
  .contact-text-list-item {
    font-family: "Times New Roman", Times, serif;
    font-size: 17px;
    margin-left: 10px;
  }
`;

export const TextListItem = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 17px;
  margin-bottom: 0;
`;

export const LinkFooter = styled(Link)`
  font-family: "Times New Roman", Times, serif;
  font-size: 17px;
  margin-left: 10px;
  color: #000;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .info-container-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    width: 80%;

    .title-info-contact:before {
      content: " ";
      display: block;
      height: 2px;
      width: 450px;
      position: absolute;
      top: 50%;
      left: 0;
      background: #ccc;
    }

    .title-info-contact {
      position: relative;
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
    .title-info-contact:after {
      content: " ";
      height: 2px;
      width: 450px;
      background: #ccc;
      display: block;
      position: absolute;
      top: 50%;
      right: 0;
    }
  }

  .item-wrapper-contact {
    display: flex;
    flex-direction: column;

    .item-container-contact {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      width: 80%;
      margin: 0 auto 30px;

      .item-content-contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30%;
        div {
          display: flex;
          flex-direction: row;
          h3 {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;
