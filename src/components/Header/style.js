import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 80px;
  width: 100%;
  padding: 0 80px;
  background-color: #fff;
  z-index: 99;
`;

export const HeaderLogo = styled.div`
  width: 80px;

  & img {
    width: 100%;
  }
`;

export const HeaderNav = styled.ul`
  height: 100%;
  margin: 0;
  list-style: none;
  display: flex;

  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 120px;
    margin: 0 8px;

    & a {
      display: block;
      min-width: 100px;
      padding: 8px;
      text-align: center;
      color: #000;
      text-decoration: none;

      &:hover {
        color: red;
        text-decoration: underline;
      }
    }
  }
`;

export const HeaderSearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  & input {
    height: 36px;
    width: 400px;
    padding: 8px;
    margin-right: 4px;
    outline: none;
    border: none;
    border-radius: 20px;
    background-color: #f0f0f0;
    transition: all 0.2s ease;

    &:focus,
    &:active {
      border: none;
      background-color: #fff;

      outline: 2px solid #d9d9d9;
      box-shadow: 0 0 8px #d9d9d9;
    }
  }

  & button {
    padding: 4px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    & i {
      font-size: 18px;
    }
  }
`;

export const HeaderRight = styled.div`
  & a {
    display: block;
    min-width: 60px;
    padding: 8px;
    text-align: center;
    color: #000;
    text-decoration: none;

    &:hover {
      color: red;
      text-decoration: underline;
    }
  }

  & i {
    font-size: 20px;
    cursor: pointer;
  }
`;
