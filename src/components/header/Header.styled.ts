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
  { to: "/consultancy", label: "Consultancy" },
  { to: "/dispute-services", label: "Dispute Services" },
  { to: "https://www.xplainfinancial.com/", label: "Xplain" },
];
export const insightsPages = [
  { to: "/insights/news", label: "News" },
  { to: "/insights/publications", label: "Publications" },
];

export const StyledHeader = styled.header`
  // background-color: ${theme.palette.text.primary};
  color: ${theme.palette.primary.main};
  display: flex;
  align-items: center;
  font-size: 20px;
  position: relative;
  z-index: 1000;

  @media ${device.mobileOnly} {
    font-size: 15px;
    padding: 30px 20px;
  }

  @media ${device.smallTablet} {
    padding: 50px 70px;
  }

  @media ${device.desktop} {
    padding: 50px 70px;
    font-size: 20px;
  }
`;

export const LogoWrapper = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  @media ${device.mobileOnly} {
    width: 70%;
  }

  @media ${device.smallTablet} {
    width: 45%;
  }

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.ultraLarge} {
    width: 55%;
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
    // margin-right: 20%;
  }

  @media ${device.tablet} {
    // margin-right: 13%;
  }
`;

export const NavList = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  @media ${device.mobileOnly} {
    display: none;
    // gap: 20px;
  }

  @media ${device.smallTablet} {
    gap: 40px;
  }

  @media ${device.desktop} {
    gap: 70px;
`;

export const NavLinkStyled = styled(NavLink)<NavLinkProps>`
  background-color: #fff;
  color: ${theme.palette.primary.main};
  text-decoration: none;
  // margin-right: 70px;
  font-family: ${({ active }) =>
    active
      ? "CircularXXWeb-Bold, sans-serif"
      : "CircularXXWeb-Regular, sans-serif"};

  &:hover {
    color: ${theme.palette.primary.main};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background-color: ${theme.palette.text.primary};
  display: flex;
  flex-direction: column;
  min-width: 160px;
  z-index: 1;
  box-shadow: 8px 8px 11px -7px rgba(0, 0, 0, 0.7);

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

export const DropdownItem = styled(NavLink)`
  color: ${theme.palette.primary.main};
  text-decoration: none;
  padding: 10px;
  outline: 0.5px solid #0000001c;
  background-color: #efecf2;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd7e3;
    color: ${theme.palette.primary.main};
  }
`;

export const DropdownItemWithIcon = styled(DropdownItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
