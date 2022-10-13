import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff;

  .login-container {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 0 auto;
    width: 70%;
    min-height: 500px;
    background-color: #fff;
  }

  .login-form {
    min-width: 350px;

    .login-form-button {
      width: 100%;
    }
  }
`;
