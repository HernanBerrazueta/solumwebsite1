import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const Container = styled.div`
  display: flex;
  background-color: ${theme.palette.text.primary};
  color: ${theme.palette.primary.main};
  width: 100%;
  position: relative;
  z-index: 1;

  & > :first-child {
    margin: 10px 30px 0px 0px;

    @media ${device.mobileOnly} {
      margin: 0;
    }
  }

  & > :last-child {
    padding-top: 30px;
    padding-left: 30px;

    @media ${device.mobileOnly} {
      padding-left: 0px;
    }
  }

  & > div {
    // max-width: 25%;
  }

  h1,
  p {
    margin-bottom: 30px;
    line-height: 1.4;
    text-align: justify;

    @media ${device.mobileOnly} {
      text-align: left;
    }
  }

  @media ${device.mobileOnly} {
    display: block;
  }

  @media ${device.desktop} {
    & > :first-child {
      width: 55%;
    }

    & > :last-child {
      width: 45%;
    }
  }

  @media ${device.ultraLarge} {
    & > :first-child {
      width: 57%;
    }

    & > :last-child {
      width: 43%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const IconsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 65px;

  div {
    margin-bottom: 13px;
    font-size: 1.3rem;
    color: ${theme.palette.primary.main};
  }
`;

export const TextColumn = styled.div`
  flex: 1;
  padding-left: 30px;

  h1,
  p {
    margin-bottom: 30px;
    line-height: 1.4;
    text-align: justify;

    @media ${device.mobileOnly} {
      text-align: left;
    }
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  z-index: 1;
`;

export const ImageStyled = styled.img`
  object-fit: cover;
  max-width: 55%;

  @media ${device.mobileOnly} {
    max-width: 100%;
  }
`;
