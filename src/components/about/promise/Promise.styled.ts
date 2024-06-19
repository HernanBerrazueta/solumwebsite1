import styled from "styled-components";
import { Grid } from "@mui/material";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const GridPromiseWrapper = styled(Grid)`
  // background-color: ${theme.palette.text.primary};
  text-align: justify;
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
