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
    @media ${device.mobileOnly} {
      padding: 40px 0 20px;
    }

    @media ${device.tablet} {
      padding: 0 50px;
    }

    @media ${device.smallTablet} {
      padding: 0 20px;
    }

    @media ${device.tablet} {
      padding: 0 50px;
    }

    @media ${device.desktop} {
      padding: 0 60px;
    }

    @media ${device.ultraLarge} {
      padding: 0 190px;
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
  align-content: center;
  flex-wrap: wrap;
  z-index: 1;
`;

export const TitleStyled = styled.h1`
  font-family: "CircularXXWeb-Medium", sans-serif;
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
