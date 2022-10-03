import styled from "styled-components";

export const ScrollTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: ${(props) => (props.visible ? "40px" : "-80px")};
  bottom: 40px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background-color: #d9d9d9;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: all 0.3s ease;
  cursor: pointer;
  z-index: 99;

  &:hover {
    background-color: #fff;
    box-shadow: 0 0 10px #8c8c8c;
  }

  & i {
    font-size: 18px;
  }
`;
