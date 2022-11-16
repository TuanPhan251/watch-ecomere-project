import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, #bbd2c5, #536976, #292e49);

  .login-container {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 700px;
    min-height: 500px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;

    .login-left {
      width: 50%;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .login-right {
      width: 50%;
      @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
      }
      .title-login {
        width: 70%;
        margin: 50px auto 0;
      }
    }
    @media (max-width: 768px) {
      width: 400px;
    }
  }

  .login-form {
    width: 70%;
    margin: 50px auto 0;
    .login-form-button {
      width: 100%;
      margin-bottom: 10px;
    }
    .navi-register-button {
      width: 100%;
      font-size: 15px;
      color: #ccc;
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid #ccc;
      cursor: pointer;
      &:hover {
        border: 1px solid #000;
        color: #000;
      }
    }
  }
`;
export const TextLabel = styled.p`
  font-size: 35px;
  font-family: "Brush Script MT";
  text-align: center;
`;
