import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-text-color: #141414;
    --text-disabled: #bfbfbf;
    --primary-color: #9E2A2B;
    --button-color: #9E2A2B;
    --price-color : #344e41;
    --bgr-color: #f0f0f0;

    --header-height: 60px;


    --box-shadow: 0px 0px 10px #bfbfbf;
    --boder-basic: 1px solid #f0f0f0;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #fafafa;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #595959;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #fafafa;
  }
  }

  h1, h2 , h3 , h4 , h5 ,h6 ,p , ul , li {
    margin: 0;
    padding: 0;
  }

  main {
    margin-top: var(--header-height);
    min-height: 100vh;
  }
`;

export default GlobalStyle;
