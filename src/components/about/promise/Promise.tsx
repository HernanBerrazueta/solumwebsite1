import React from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import theme from "../../../theme";
import { promiseData } from "./data";

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
    <>
      <Grid
        style={{
          backgroundColor: theme.palette.text.primary,
          padding: "100px 0px",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "center",
          gap: 35,
        }}
        item
        xs={12}
      >
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: theme.palette.primary.main,
          }}
        >
          <h2 style={{ fontSize: 32, marginBottom: 50 }}>
            {promiseData[imageIndex].title}
          </h2>
          <p style={{ fontSize: 22 }}>{promiseData[imageIndex].description}</p>
        </Grid>
      </Grid>
    </>
  );
};

export default PromiseComponent;
