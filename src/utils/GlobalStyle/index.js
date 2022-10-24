import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-text-color: #141414;
    --text-disabled: #bfbfbf;
    --button-color: #061178;
    --price-color : #061178;

    --header-height: 80px;


    --box-shadow: 0px 0px 10px #bfbfbf;
    --boder-basic: 1px solid #d9d9d9;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Inter Tight", "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  h1, h2 , h3 , h4 , h5 ,h6 ,p , ul , li {
    margin: 0;
    padding: 0;
  }

  main {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
