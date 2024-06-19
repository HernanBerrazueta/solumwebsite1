import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const ContactContainer = styled.div`
  text-align: left;

  @media ${device.mobileOnly} {
    padding: 50px 20px;
  }
  @media ${device.smallTablet} {
    // text-align: justify;
    padding: 50px 30px;
  }
  @media ${device.desktop} {
    padding: 50px 70px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 32px;
  color: ${theme.palette.primary.main};
`;

export const Description = styled.p`
  margin-top: 50px;
  max-width: 100vw;
  color: ${theme.palette.primary.main};
  font-size: 22px;
`;
