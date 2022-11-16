import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactPageWrapper = styled.div`
  .contact-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 100px auto 0;
    max-width: 1200px;
    margin-bottom: 50px;
    @media (max-width: 1199px) {
      max-width: 900px;
    }
    .contact-container-left {
      @media (max-width: 992px) {
        margin: 0 20px;
      }
    }
    .contact-container-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 30px;
      height: 100%;

      .contact-title {
        font-size: 30px;
        font-weight: 700;
      }
      .contact-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        width: 100%;

        .contact-text-list-item {
          font-family: "Times New Roman", Times, serif;
          font-size: 17px;
          margin-left: 10px;
        }
      }
    }
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
  max-width: 1200px;
  margin: 0 auto;

  .info-container-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    .title-info-contact {
      margin: 0 auto;
      text-align: center;
    }
  }

  .item-wrapper-contact {
    display: flex;
    flex-direction: column;
    .item-container-contact {
      align-items: flex-start;
      margin-bottom: 30px;
      justify-content: center;
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
