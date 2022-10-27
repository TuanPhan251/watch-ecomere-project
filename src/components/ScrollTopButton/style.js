import styled from "styled-components";

export const ScrollTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: ${(props) => (props.visible ? "40px" : "-80px")};
  bottom: 40px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: var(--button-color);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 99;

  &:hover {
    filter: brightness(80%);
  }

  & i {
    color: #fff;
    font-size: 20px;
  }
`;
