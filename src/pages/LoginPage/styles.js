import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, #bbd2c5, #536976, #292e49);

  .login-container {
    margin: 0 auto;
    min-width: 400px;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;

    .login-left {
      width: 50%;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .login-right {
      padding: 20px;

      .title-login {
        margin-bottom: 12px;

        h3 {
          text-align: center;
          font-size: 20px;
        }
      }
    }
  }

  .login-form {
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
