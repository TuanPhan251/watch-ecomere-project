import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-text-color: #141414;

    --header-height: 80px;

    --box-shadow: 0px 0px 10px #bfbfbf;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Inter Tight", "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fafafa;
  }

  main {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
