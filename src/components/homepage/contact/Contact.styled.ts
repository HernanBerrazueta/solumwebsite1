import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const ContactContainer = styled.div`
  text-align: left;

  @media ${device.mobileOnly} {
    padding: 50px 20px;
  }
  @media ${device.smallTablet} {
    padding: 50px 30px;
  }
  @media ${device.desktop} {
    padding: 50px 70px;
  }
`;

export const Title = styled.h1`
  font-family: "CircularXXWeb-Medium", sans-serif;
  padding-top: 10px;
  background-color: #fff;
  font-size: 32px;
  color: ${theme.palette.primary.main};
`;

export const Description = styled.p`
  padding-bottom: 10px;
  max-width: 100vw;
  color: ${theme.palette.primary.main};
  font-size: 22px;
`;
