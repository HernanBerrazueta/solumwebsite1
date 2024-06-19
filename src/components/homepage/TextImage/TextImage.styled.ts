import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const Container = styled.div`
  display: flex;
  // background-color: ${theme.palette.text.primary};
  color: ${theme.palette.primary.main};
  width: 100%;

  & > :first-child {
    margin: 30px 0 0 0;

    @media ${device.mobileOnly} {
      margin-bottom: 40px;
    }

    @media ${device.smallTablet} {
      margin-left: 40px;
    }

    @media ${device.desktop} {
      margin-right: 100px;
    }

    @media ${device.ultraLarge} {
      margin-right: 100px;
    }
  }

  & > :last-child {
    margin: 0 40px 0 30px;

    @media ${device.mobileOnly} {
      margin-left: 0px;
    }
  }

  h1 {
    font-size: 32px;
    text-align: left;
  }

  p {
    font-size: 22px;
    text-align: left;
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
      width: 40%;
    }

    & > :last-child {
      width: 60%;
    }
  }
`;
