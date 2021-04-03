import { createGlobalStyle } from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
</style>;

const GlobalStyle = createGlobalStyle`
  
  html {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 100%;
    color: #212121;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }
`;

export default GlobalStyle;
