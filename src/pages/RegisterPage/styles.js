import styled from "styled-components";

export const RegisterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, #bbd2c5, #536976, #292e49);

  .register-container {
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

    .register-left {
      width: 50%;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .register-right {
      width: 50%;
      @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
      }
      .title-register {
        width: 70%;
        margin: 50px auto 0;
      }
    }
    @media (max-width: 768px) {
      width: 400px;
    }
  }

  .register-form {
    width: 70%;
    margin: 100px auto 0;

    .register-form-button {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
export const TextLabel = styled.p`
  font-size: 35px;
  font-family: "Brush Script MT";
  text-align: center;
`;
