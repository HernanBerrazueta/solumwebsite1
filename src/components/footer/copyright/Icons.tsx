import React from "react";
import MdPhone from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IconsGrid } from "./Copyright.styled";

const Icons: React.FC = () => {
  return (
    <IconsGrid container>
      <a href="mailto:contact@solum-financial.com" target="_blank">
        <MailOutlineIcon fontSize="large" />
      </a>
      <a href="tel:+4470207869230">
        <MdPhone fontSize="large" />
      </a>
    </IconsGrid>
  );
};

export default Icons;
