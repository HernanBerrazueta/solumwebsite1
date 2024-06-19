import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const Container = styled.div`
  display: flex;
  color: ${theme.palette.primary.main};
  width: 100%;
  position: relative;
  z-index: 1;

  & > :first-child {
    margin: 10px 30px 0px 40px;

    @media ${device.mobileOnly} {
      margin: 0;
    }
  }

  & > :last-child {
    margin-right: 30px;
    @media ${device.mobileOnly} {
      padding-top: 40px;
    }
  }

  & > div {
    // max-width: 25%;
  }

  h1,
  p {
    padding-bottom: 30px;
    line-height: 1.4;
    text-align: left;
  }

  @media ${device.mobileOnly} {
    display: block;
  }

  @media ${device.desktop} {
    & > :first-child {
      width: 60%;
    }

    & > :last-child {
      width: 40%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const TextColumn = styled.div`
  flex: 1;
  padding-left: 30px;

  h1,
  p {
    padding-bottom: 30px;
    line-height: 1.4;
    text-align: left;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  flex-wrap: wrap;
  align-content: center;

  @media ${device.mobileOnly} {
    margin-bottom: 40px;
  }
`;

export const TitleStyled = styled.h1`
  font-family: "CircularXXWeb-Bold", sans-serif;
  display: inline-block;
  font-size: 32px;
  text-align: left !important;
  background-color: #fff;
`;

export const TextStyled = styled.p`
  font-size: 22px;
  background-color: #fff;

  @media ${device.smallTablet} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
`;

export const ImageStyled = styled.img`
  object-fit: cover;
  max-width: 60%;

  @media ${device.mobileOnly} {
    max-width: 100%;
  }
`;
