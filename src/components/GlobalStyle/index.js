import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #app {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;

    font-family: 'Roboto', sans-serif;
  }
`;
