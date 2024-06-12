import React from "react";
import { FooterContainer } from "./Footer.styled";
import Copyright from "./copyright/Copyright";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright />
    </FooterContainer>
  );
};

export default Footer;
