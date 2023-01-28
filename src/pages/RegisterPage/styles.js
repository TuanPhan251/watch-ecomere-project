import styled from "styled-components";

export const RegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, #bbd2c5, #536976, #292e49);

  .register-container {
    min-width: 400px;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;

    .register-left {
      width: 50%;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .register-right {
      padding: 20px;

      .title-register h3 {
        text-align: center;
        font-size: 20px;
        margin-bottom: 12px;
      }
    }
  }

  .register-form {
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
