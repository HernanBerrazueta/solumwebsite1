import styled from "styled-components";
import theme from "../../theme";
import { device } from "../../utils/device";

export const FooterContainer = styled.footer`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.text.primary};
  text-align: center;
  padding: 80px 20px;
  font-size: 14px;
  font-family: "CircularXXWeb-Medium", sans-serif;

  width: 100vw;

  @media ${device.mobileOnly} {
    padding: 40px 20px;
    text-align: left;
  }
`;
