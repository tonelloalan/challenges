import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    padding: 50px;
    background-color: lightblue;
    text-shadow: 0px 2px 8px rgba(245, 245, 245, 1); 
  }
`;
