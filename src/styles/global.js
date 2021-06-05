import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: #FFFFFF;
  }

  body, input, button, textarea {
    font: 14px Gordita Regular, sans-serif;
  }
  @font-face {
    font-family: 'Gordita Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Gordita Regular'), url('Gordita Regular.woff') format('woff');
    }
    

    @font-face {
    font-family: 'Gordita Regular Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Gordita Regular Italic'), url('Gordita Regular Italic.woff') format('woff');
    }
  
`;

export default GlobalStyle;
