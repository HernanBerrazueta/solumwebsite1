import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const MainTitleStyled = styled.h1`
  font-optical-sizing: auto;
  font-size: 18px;

  color: #fff;
  max-width: 90%;

  @media ${device.tablet} {
    font-size: 24px;
    max-width: 354px;
  }

  @media ${device.desktop} {
    font-size: 32px;
    max-width: 400px;
  }

  @media ${device.ultraLarge} {
    font-size: 48px;
    max-width: 660px;
  }
`;

export const MainTextStyled = styled.p`
  font-optical-sizing: auto;
  font-size: 14px;
  max-width: 260px;
  line-height: 1.5;
  margin: 40px 0px 30px;
  color: ${theme.palette.text.secondary};

  @media ${device.smallTablet} {
    font-size: 16px;
    max-width: 280px;
  }

  @media ${device.tablet} {
    font-size: 18px;
    max-width: 354px;
  }

  @media ${device.desktop} {
    max-width: 500px;
  }

  @media ${device.ultraLarge} {
    max-width: 660px;
  }
`;

export const TextStyled = styled(MainTextStyled)`
  display: inline-block;
  background-color: #fff;
  color: ${theme.palette.primary.main};
  width: 100%;
  max-width: 100%;
  margin: 40px 0 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media ${device.mobileOnly} {
    padding: 40px 20px;
  }
  @media ${device.smallTablet} {
    padding: 50px;
  }
  @media ${device.desktop} {
    padding: 100px 250px;
  }
`;

export const TitleStyled = styled(MainTitleStyled)`
  background-color: #fff;
  color: ${theme.palette.primary.main};
  text-align: left;
  margin: 40px 0 0;
  max-width: 660px;
`;

export const Header = styled.h1`
  background-color: #fff;
  color: ${theme.palette.primary.main};
  text-align: left;

  @media ${device.mobileOnly} {
    font-size: 30px;
  }
`;

export const SubHeader = styled.h2`
  background-color: #fff;
  color: ${theme.palette.primary.main};
  margin-top: 50px;
  text-align: left;
`;

export const CookiesList = styled.ul`
  background-color: #fff;
  list-style-type: initial;
  padding-left: 50px;
`;
export const PrivacyList = styled.ol`
  background-color: #fff;
  list-style-type: auto;
  padding-left: 20px;
`;
export const AbcList = styled.ol`
  background-color: #fff;
  list-style: lower-latin;
  padding-left: 40px;
`;

export const LiStyled = styled.li`
  background-color: #fff;
  color: ${theme.palette.primary.main};
  width: 100%;

  & > p {
    margin-top: 0;
  }
`;

export const LinkStyled = styled(Link)`
  background-color: #fff;
  text-decoration: underline;
`;
