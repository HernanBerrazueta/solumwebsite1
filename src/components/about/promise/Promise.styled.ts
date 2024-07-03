import styled from "styled-components";
import { Grid } from "@mui/material";
import { device } from "../../../utils/device";

export const GridPromiseWrapper = styled(Grid)`
  text-align: left;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  @media ${device.mobile} {
    padding: 40px 20px 20px 0px;
  }

  @media ${device.smallTablet} {
    padding: 0px 40px 50px;
  }
`;

export const StyledHeading = styled.h2`
  font-size: 32px;
  margin-bottom: 50px;
  background-color: #fff;
  font-family: CircularXXWeb-Medium, sans-serif;
  display: inline-block;
  white-space: nowrap;

  @media ${device.ultraLarge} {
    font-size: 36px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 22px;
  background-color: #fff;

  @media ${device.ultraLarge} {
    font-size: 24px;
  }
`;
