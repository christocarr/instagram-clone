import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f8f8;
}

ul {
    list-style: none;
    padding: 0;
}

h2 {
  margin: 0;
}

p {
  font-size: 0.8rem;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

`;

export default GlobalStyle;
