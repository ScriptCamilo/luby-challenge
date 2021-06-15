import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: -webkit-fill-available;
  }

  body {
    background: #292929;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;
