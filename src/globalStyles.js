import { createGlobalStyle, css } from 'styled-components';

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
  ${(props) =>
    props.theme.theme === 'light'
      ? css`
          background-color: hsl(100, 0%, 97%);
        `
      : css`
          background-color: hsl(100, 0%, 20%);
        `}
}

ul {
    list-style: none;
    padding: 0;
}

nav li a {
  width: 30px;
  height: 30px;
  @media (min-width: 767px) {
    width: 45px;
    height: 45px;
  }
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
  display: inline-block;
}

`;

export default GlobalStyle;
