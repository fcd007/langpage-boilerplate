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

  body {
    margin: 0;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
