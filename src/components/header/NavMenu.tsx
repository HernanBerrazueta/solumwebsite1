import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Nav,
  NavList,
  NavLinkStyled,
  DropdownMenu,
  DropdownItem,
  DropdownItemWithIcon,
  BlurWrapper,
} from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FadeInAnimation } from "../animations/animations";
import useMatchMedia from "../../hooks/useMediaQuery";
import BurgerMenu from "./mobileMenu/BurgerMenu";
import useScrollLock from "../../hooks/useScrollLock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavMenu: React.FC = () => {
  const { isMobile, isTablet } = useMatchMedia();
  const location = useLocation();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  // const [setShowInsightsDropdown] = useState(false);
  // const [showInsightsDropdown, setShowInsightsDropdown] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleMenu = () => {
    if (mobileMenuIsOpen) return closeMobMenu();
    setMobileMenuIsOpen(true);
    lockScroll();
  };

  const closeMobMenu = () => {
    setMobileMenuIsOpen(false);
    unlockScroll();
  };

  const handleServicesMouseEnter = () => {
    setShowServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    setShowServicesDropdown(false);
  };

  return (
    <>
      {!isMobile && !isTablet ? (
        <Nav>
          <NavList>
            <NavLinkStyled
              to="/"
              active={location.pathname === "/" ? "true" : undefined}
            >
              Home
            </NavLinkStyled>
            <div
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <NavLinkStyled
                to="/consultancy"
                active={
                  location.pathname === "/consultancy" ||
                  location.pathname === "/dispute-services"
                    ? "true"
                    : undefined
                }
              >
                {location.pathname === "/dispute-services" ? (
                  <strong style={{ display: "flex", alignItems: "center" }}>
                    Services <ExpandMoreIcon style={{ marginLeft: "4px" }} />
                  </strong>
                ) : (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "-4px",
                    }}
                  >
                    Services <ExpandMoreIcon style={{ marginLeft: "4px" }} />
                  </span>
                )}
              </NavLinkStyled>
              {showServicesDropdown && (
                <FadeInAnimation $delay="0.03s">
                  <DropdownMenu data-menu="services">
                    <BlurWrapper />
                    <DropdownItemWithIcon to="/xplain">
                      Xplain
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        style={{ fontSize: "0.75em" }}
                      />
                    </DropdownItemWithIcon>
                    <DropdownItem to="/consultancy">Consultancy</DropdownItem>
                    <DropdownItem to="/dispute-services">
                      Dispute Services
                    </DropdownItem>
                  </DropdownMenu>
                </FadeInAnimation>
              )}
            </div>
            <div>
              <NavLinkStyled
                to="/insights/publications"
                active={
                  location.pathname === "/insights/news" ||
                  location.pathname === "/insights/publications"
                    ? "true"
                    : undefined
                }
              >
                Insights
              </NavLinkStyled>
            </div>
            <NavLinkStyled
              to="/about"
              active={location.pathname === "/about" ? "true" : undefined}
            >
              About
            </NavLinkStyled>
            <NavLinkStyled
              to="/contact"
              active={location.pathname === "/contact" ? "true" : undefined}
            >
              Contact
            </NavLinkStyled>
          </NavList>
        </Nav>
      ) : (
        <BurgerMenu
          closeMobMenu={closeMobMenu}
          mobileMenuIsOpen={mobileMenuIsOpen}
          toggleMenu={toggleMenu}
        />
      )}
    </>
  );
};

export default NavMenu;
