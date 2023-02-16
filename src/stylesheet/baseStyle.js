import styled, { createGlobalStyle } from 'styled-components';

export const BaseStyle = createGlobalStyle`

*,
::after,
::before {
  box-sizing: border-box;
}

html {
  -moz-tab-size: 4;
  tab-size: 4;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
  font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    font-size: 16px;
  color: #000000;
  background:#E7EAF2;
}

ul{
  list-style: none;
  padding: 0px;
  margin: 0px;
}

h1, h2, h3, h4, h5, p{
  margin-top: 0;
  margin-bottom: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
}
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1280px;
  }
`;
