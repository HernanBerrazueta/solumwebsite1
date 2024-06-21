import styled from "styled-components";
import { Grid } from "@mui/material";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const BackgroundContainer = styled(Grid)`
  position: relative;
  background-color: #f0ecf3;
  flex-direction: column !important;
  justify-content: center;
  align-items: center;
`;

export const TeamGrid = styled(Grid)`
  padding: 50px;
  max-width: 1300px;

  @media ${device.mobileOnly} {
    flex-direction: column;
    padding: 50px 20px;
  }
`;

export const BoxItem = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column !important;
  align-items: center;
  padding: 10px;
  justify-content: center;
  transition: all 0.7s;
  transform: scale(1);

  @media ${device.mobileOnly} {
    padding: 10px 0;
  }

  &:hover {
    transition: all 0.7s;
    transform: scale(1.05);
  }
`;

export const BoxImage = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 220px;
  width: 100%;
  background-size: cover;
  border-radius: 10px;
  background-position: 50%;
  filter: grayscale(100%);
`;

export const TeamMemberTitle = styled.h2`
  padding: 50px 0 0;
  color: ${theme.palette.primary.main};
  font-size: 32px;
`;
export const TeamMemberName = styled.h4`
  color: #000;
  font-family: "CircularXXWeb-Medium", sans-serif;
`;

export const TeamMemberPosition = styled.p`
  color: #000;
`;

export const ButtonText = styled.span`
  text-transform: none !important;
`;
