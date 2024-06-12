import React from "react";
import logo from "../../assets/logos/logo.svg";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { StyledHeader } from "./Header.styled";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo" />
      <NavMenu />
    </StyledHeader>
  );
};

export default Header;
