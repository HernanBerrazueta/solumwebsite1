import React from "react";
// import logoStaked from "../../assets/logos/SolumLogo_Staked_MidnightPurple.svg";
import logoHorizontal from "../../assets/logos/logo.svg";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { StyledHeader } from "./Header.styled";
// import useMatchMedia from "../../hooks/useMediaQuery";

const Header: React.FC = () => {
  // const { isTablet } = useMatchMedia();
  // const logoImg = isTablet ? logoStaked : logoHorizontal;

  return (
    <StyledHeader>
      <Logo src={logoHorizontal} alt="Logo" />
      <NavMenu />
    </StyledHeader>
  );
};

export default Header;
