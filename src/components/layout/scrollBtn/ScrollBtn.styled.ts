import styled from "styled-components";
import { Button } from "@mui/material";
import NavigationSharpIcon from "@mui/icons-material/NavigationSharp";
import theme from "../../../theme";

export const ScrollBtnStyled = styled(Button)`
  position: fixed !important;
  bottom: 50px !important;
  right: 50px !important;
  z-index: 4 !important;
  background-color: #805cdd75 !important;
  border-radius: 50px !important;
  transition: color 0.3s linear;

  &:hover {
    background-color: #46594f75 !important;
  }

  &:hover > svg {
    transform: color;
    fill: ${theme.palette.text.primary};
  }
`;

export const NavigationSharpIconStyled = styled(NavigationSharpIcon)`
  fill: ${theme.palette.primary.main};
`;
