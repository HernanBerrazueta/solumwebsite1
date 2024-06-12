import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const Container = styled.div`
  display: flex;
  background-color: ${theme.palette.text.primary};
  color: ${theme.palette.primary.main};
  width: 100%;

  & > :first-child {
    margin: 30px 0 0 0;
  }

  & > :last-child {
    margin-left: 70px;

    @media ${device.mobileOnly} {
      margin-left: 0px;
    }
  }

  h1 {
    font-size: 32px;
    text-align: justify;

    @media ${device.mobileOnly} {
      text-align: left;
    }
  }

  p {
    font-size: 22px;
    text-align: justify;

    @media ${device.mobileOnly} {
      text-align: left;
    }
  }

  h1,
  p {
    margin-bottom: 30px;
    line-height: 1.4;
  }

  @media ${device.mobileOnly} {
    display: block;
  }

  @media ${device.desktop} {
    & > :first-child {
      width: 45%;
    }

    & > :last-child {
      width: 55%;
    }
  }

  @media ${device.ultraLarge} {
    & > :first-child {
      width: 35%;
    }

    & > :last-child {
      width: 65%;
    }
  }
`;
