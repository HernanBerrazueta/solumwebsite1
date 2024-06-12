import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  burgerMenuItems,
  insightsPages,
  servicesPages,
} from "../Header.styled";
import Logo from "../Logo";
import logo from "../../../assets/logos/logo.svg";
import {
  HamburgerMenu,
  LogoItem,
  MenuBox,
  MenuBtn,
  MenuItem,
  MenuToggle,
  SubMenu,
  SubMenuItem,
} from "./BurgerMenu.styled";

interface BurgerProps {
  closeMobMenu: () => void;
  mobileMenuIsOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerProps> = ({
  closeMobMenu,
  mobileMenuIsOpen,
  toggleMenu,
}) => {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const [showServices, setShowServices] = useState(false);
  const [showInsights, setShowInsights] = useState(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMobMenu();
      }
    },
    [closeMobMenu]
  );

  const handleMenuBtnClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    toggleMenu();
  };

  const handleToggleServices = () => {
    setShowServices((prev) => !prev);
  };

  const handleToggleInsights = () => {
    setShowInsights((prev) => !prev);
  };

  const handleLinkClick = () => {
    closeMobMenu();
  };

  useEffect(() => {
    if (mobileMenuIsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuIsOpen, handleClickOutside]);

  return (
    <HamburgerMenu ref={menuRef}>
      <MenuToggle
        id="menu__toggle"
        type="checkbox"
        checked={mobileMenuIsOpen}
        onChange={toggleMenu}
      />
      <MenuBtn htmlFor="menu__toggle" onClick={handleMenuBtnClick}>
        <span></span>
      </MenuBtn>
      <MenuBox style={{ top: mobileMenuIsOpen ? "0" : "-100%" }}>
        <LogoItem onClick={handleLinkClick}>
          <Logo src={logo} alt="Logo" />
        </LogoItem>
        {burgerMenuItems.map(({ to, label }) => (
          <li key={label}>
            <MenuItem
              to={to}
              active={location.pathname === to ? "true" : undefined}
              onClick={
                (label === "Services" && handleToggleServices) ||
                (label === "Insights" && handleToggleInsights) ||
                handleLinkClick
              }
            >
              {label}
              {(label === "Insights" || label === "Services") && (
                <ExpandMoreIcon
                  style={{ verticalAlign: "middle", marginLeft: "auto" }}
                />
              )}
            </MenuItem>
            {label === "Services" && showServices && (
              <SubMenu>
                {servicesPages.map(({ to, label }) => (
                  <SubMenuItem
                    key={label}
                    to={to}
                    active={location.pathname === to ? "true" : undefined}
                    onClick={handleLinkClick}
                  >
                    {label}
                  </SubMenuItem>
                ))}
              </SubMenu>
            )}
            {label === "Insights" && showInsights && (
              <SubMenu>
                {insightsPages.map(({ to, label }) => (
                  <SubMenuItem
                    key={label}
                    to={to}
                    active={location.pathname === to ? "true" : undefined}
                    onClick={handleLinkClick}
                  >
                    {label}
                  </SubMenuItem>
                ))}
              </SubMenu>
            )}
          </li>
        ))}
      </MenuBox>
    </HamburgerMenu>
  );
};

export default BurgerMenu;
