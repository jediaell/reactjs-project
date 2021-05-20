import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';
import { getTheme } from '~/utils';

const primaryContrast = getTheme('primary.contrast');
const primaryMain = getTheme('primary.main');

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: ${primaryContrast};
    color: ${primaryMain};
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    height: 100%;
  }
  input, button {
    font-family: 'Source Sans Pro', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
