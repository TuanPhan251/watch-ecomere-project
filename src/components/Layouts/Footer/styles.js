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
    font-size: 18px;
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

//new footer

export const Wrapper = styled.footer`
  background-color: #141414;
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 40px 12px;
  color: #999;

  .footer__title {
    color: #fff;
    font-size: 20px;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      margin-top: 12px;
    }
  }

  .footer__logo {
    margin-top: 12px;
  }

  .footer__list {
    list-style: none;
    display: flex;
    flex-direction: column;

    .footer__list-item {
      display: inline-block;
      line-height: 1.8;
      transition: all 0.3s ease;

      a {
        margin-left: 12px;
        position: relative;
        color: #999;
        transition: all 0.3s ease;

        ::before {
          content: "";
          display: inline-block;
          position: absolute;
          top: 50%;
          left: -12px;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #999;
        }

        :hover {
          color: var(--primary-color);

          ::before {
            background-color: var(--primary-color);
          }
        }
      }
    }
  }

  .footer__support {
    display: flex;
    gap: 20px;

    .footer__support-icon {
      display: flex;
      align-items: center;

      i {
        font-size: 20px;
      }
    }

    .footer__support-info {
      h3 {
        font-size: 24px;
        color: #999;
      }

      p {
        font-size: 16px;
        text-decoration: underline;
      }
    }
  }

  .footer__follow {
    margin-top: 12px;

    .footer__follow-brands {
      display: flex;
      gap: 4px;

      .follow__brand-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border: none;
        border-radius: 50%;
        background-color: transparent;
        transition: all 0.5s ease;
        cursor: pointer;

        i {
          transition: all 0.5s ease;
          font-size: 24px;
        }

        :hover {
          background-color: var(--button-color);

          i {
            color: #fff;
          }
        }
      }
    }
  }

  .footer__web-author {
    margin-top: 12px;
    padding: 12px 0 0;
    border-top: 2px solid #595959;

    p {
      text-align: center;
    }
  }
`;
