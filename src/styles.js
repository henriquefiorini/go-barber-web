import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 100%;
    touch-action: manipulation;
  }

  body {
    background-color: white;
    color: black;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.5;
    overflow-x: hidden;
  }

  a {
    color: #3b9eff;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      outline: 0;
    }
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  input,
  select,
  textarea,
  button {
    border: none;
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    text-decoration: none;
    user-select: none;
    cursor: pointer;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      outline: 0;
    }
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }

  abbr {
    cursor: help;
  }
`;
