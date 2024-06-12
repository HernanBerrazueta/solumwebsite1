import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "CircularXXWeb-Regular", sans-serif;;
    src: url("/src/assets/fonts/CircularXXWeb-Regular.woff") format("woff");
  }
  body {
    font-weight: normal;
    font-style: normal;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;

  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  address {
    /* by default address italic */
    font-style: normal;
  }
`;

export default GlobalStyles;
