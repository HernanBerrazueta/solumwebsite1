import { createGlobalStyle } from "styled-components";
import homeImage from "/squiggles/Homepage Graphic.svg";
import aboutImage from "/squiggles/About Us Graphic.svg";
import consultancyImage from "/squiggles/Consultancy Graphic.svg";
import disputeServicesImage from "/squiggles/Dispute Services Graphic.svg";
import insightsImage from "/squiggles/Insights Graphic.svg";

interface GlobalStylesProps {
  path: string;
}

const imageMap: { [key: string]: string } = {
  "/": homeImage,
  "/about": aboutImage,
  "/contact": aboutImage,
  "/privacy_policy": aboutImage,
  "/data_protection": aboutImage,
  "/cookies": aboutImage,
  "/esg_commitment": aboutImage,
  "/diversity_inclusion": aboutImage,
  "/consultancy": consultancyImage,
  "/dispute-services": disputeServicesImage,
  "/insights/publications": aboutImage,
  "/insights/news": insightsImage,
};

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  @font-face {
    font-family: "CircularXXWeb-Regular", sans-serif;
    src: url("/src/assets/fonts/CircularXXWeb-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "CircularXXWeb-Regular", sans-serif;
    font-weight: normal;
    font-style: normal;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fff;
    background-image: ${(props) => `url(${imageMap[props.path] || "none"})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: top center;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: "CircularXXWeb-Regular", sans-serif;
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
