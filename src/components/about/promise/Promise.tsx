import React from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import theme from "../../../theme";
import { promiseData } from "./data";
import {
  GridPromiseWrapper,
  StyledHeading,
  StyledParagraph,
} from "./Promise.styled";

const PromiseComponent: React.FC = () => {
  const location = useLocation();
  const isConsultancyPage = location.pathname === "/consultancy";
  const isDisputePage = location.pathname === "/dispute-services";
  const isAboutPage = location.pathname === "/about";

  let imageIndex: number = 0;

  if (isConsultancyPage) {
    imageIndex = 0;
  } else if (isAboutPage) {
    imageIndex = 1;
  } else if (isDisputePage) {
    imageIndex = 2;
  }

  return (
    <GridPromiseWrapper item xs={12}>
      <Grid
        container
        direction="column"
        alignItems="flex-start"
        style={{
          color: theme.palette.primary.main,
        }}
      >
        <StyledHeading>{promiseData[imageIndex].title}</StyledHeading>
        <StyledParagraph>{promiseData[imageIndex].description}</StyledParagraph>
      </Grid>
    </GridPromiseWrapper>
  );
};

export default PromiseComponent;
