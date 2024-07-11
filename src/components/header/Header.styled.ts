import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import theme from "../../theme";
import { device } from "../../utils/device";

interface NavLinkProps {
  active?: string;
}

export const burgerMenuItems = [
  { to: "", label: "Services" },
  { to: "", label: "Insights" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

export const servicesPages = [
  { to: "https://www.xplainfinancial.com/", label: "Xplain" },
  { to: "/consultancy", label: "Consultancy" },
  { to: "/dispute-services", label: "Dispute Services" },
];
export const insightsPages = [
  // { to: "/insights/news", label: "News" },
  { to: "/insights/publications", label: "Publications" },
];

export const StyledHeader = styled.header`
  color: ${theme.palette.primary.main};
  display: flex;
  align-items: center;
  font-size: 20px;
  position: relative;
  z-index: 1000;

  @media ${device.mobileOnly} {
    font-size: 15px;
    padding: 30px 20px;
    justify-content: space-between;
  }

  @media ${device.smallTablet} {
    justify-content: space-between;
    padding: 50px 30px;
    align-items: flex-start;
  }
  @media ${device.tablet} {
    padding: 50px 30px;
    align-items: center;
  }

  @media ${device.desktop} {
    padding: 50px 70px;
    font-size: 20px;
  }

  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
  }
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  @media ${device.mobile} {
    width: 220px;
  }

  @media ${device.tablet} {
    width: 75%;
  }

  @media ${device.ultraLarge} {
    width: 65%;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media ${device.mobileOnly} {
  }

  @media ${device.smallTablet} {
    width: 20%;
  }
`;

export const NavList = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  @media ${device.mobileOnly} {
    display: none;
  }

  @media ${device.smallTablet} {
    gap: 40px;
  }

  @media ${device.desktop} {
    gap: 70px;
  }
`;

export const NavLinkStyled = styled(NavLink)<NavLinkProps>`
  display: inline-block;
  font-family: "CircularXXWeb-Regular", sans-serif;
  background-color: ${theme.palette.text.primary};
  color: ${theme.palette.primary.main};
  border-bottom: ${({ active }) => (active ? "4px solid #DDD7E3" : "none")};
  margin-bottom: -4px;
  height: 34px;
  transition: border-bottom 0.1s ease-in-out, margin-bottom 0.1s ease-in-out;

  &:hover {
    color: ${theme.palette.primary.main};
    border-bottom: 4px solid #ddd7e3;
    margin-bottom: -4px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background-color: rgba(240, 237, 243, 0.85);
  display: flex;
  flex-direction: column;
  min-width: 160px;
  z-index: 1;
  box-shadow: 8px 8px 11px -7px ${theme.palette.primary.main};

  @media ${device.mobileOnly} {
    &[data-menu="services"] {
      min-width: 297px;
    }

    &[data-menu="insights"] {
      min-width: 210px;
    }
  }

  @media ${device.smallTablet} {
    &[data-menu="services"] {
      min-width: 420px;
    }

    &[data-menu="insights"] {
      min-width: 280px;
    }
  }

  @media ${device.desktop} {
    &[data-menu="services"] {
      min-width: 510px;
    }

    &[data-menu="insights"] {
      min-width: 339px;
    }
  }

  @media ${device.ultraLarge} {
    &[data-menu="services"] {
      min-width: 510px;
    }

    &[data-menu="insights"] {
      min-width: 340px;
    }
  }
`;

export const BlurWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  backdrop-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  -moz-filter: blur(5px);
  -webkit-filter: blur(5px);
`;

export const DropdownContent = styled.div`
  position: relative;
  z-index: 2;
  background-color: #f0edf3b3;
  padding: 10px;
`;

export const DropdownItem = styled(NavLink)`
  position: relative;
  color: ${theme.palette.primary.main};
  text-decoration: none;
  padding: 10px;
  outline: 0.5px solid #0000001c;
  transition: background-color 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: #ded8e4e6;
    color: ${theme.palette.primary.main};
  }
`;

export const DropdownItemWithIcon = styled(DropdownItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
