import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const GridItem = styled(Box)<{ $ishovered: string }>`
  background-color: ${({ $ishovered }) =>
    $ishovered ? "#f0ecf3" : theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $ishovered }) =>
    $ishovered ? theme.palette.primary.main : "#f0ecf3"};
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  box-sizing: border-box;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${theme.palette.primary.main};
    color: white;
    font-size: 20px;
  }

  &:hover > .grid-item-content {
    width: 90%;
  }
`;

export const GridItemContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  transition: width 0.3s;
`;

export const GridContainer = styled(Box)`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  font-size: 22px;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto 30px;

  @media ${device.mobileOnly} {
    grid-template-columns: repeat(auto-fit, minmax(302px, 1fr));
  }

  @media ${device.smallTablet} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(218px, 1fr));
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(auto-fit, minmax(302px, 1fr));
  }

  @media ${device.copyright} {
    grid-template-columns: repeat(auto-fit, minmax(326px, 1fr));
  }

  @media ${device.ultraLarge} {
    grid-template-columns: repeat(auto-fit, minmax(580px, 1fr));
  }
`;
