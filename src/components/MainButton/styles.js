import styled, { css } from "styled-components";

export const MainButton = styled.button`
  ${(props) =>
    props.buttonType === "primary" &&
    css`
      margin-top: 4px;
      padding: 4px 12px;
      font-size: 20px;
      font-weight: 500;
      color: #fff;
      background-color: var(--button-color);
      border: none;
      border-radius: 2px;
      cursor: pointer;
      transition: all 0.3s ease;

      :hover {
        /* background-color: var(--price-color);
        color: #fff;
        box-shadow: 0 0 8px var(--price-color); */
        opacity: 0.7;
      }
    `}

  ${(props) =>
    props.buttonType === "ghost" &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 12px;
      font-size: 20px;
      font-weight: 500;
      color: var(--button-color);
      background-color: #fff;
      border: 2px solid var(--button-color);
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;

      :hover {
        background-color: var(--button-color) !important;
        color: #fff !important;
      }
    `}

  .w100 {
    width: 100%;
  }
`;
