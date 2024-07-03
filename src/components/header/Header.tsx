import React from "react";
import logoHorizontal from "../../assets/logos/logo.svg";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { StyledHeader } from "./Header.styled";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo src={logoHorizontal} alt="Logo" />
      <NavMenu />
    </StyledHeader>
  );
};

export default Header;
