import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const Container = styled.div`
  display: flex;
  color: ${theme.palette.primary.main};
  width: 100%;

  & > :first-child {
    margin: 30px 0 0 0;

    @media ${device.mobileOnly} {
      margin-bottom: 40px;
    }

    @media ${device.smallTablet} {
      margin: 0px 20px;
    }
    @media ${device.tablet} {
      margin-left: 40px;
    }

    @media ${device.desktop} {
      margin-right: 100px;
    }
  }

  & > :last-child {
    @media ${device.mobileOnly} {
      margin: 0px;
    }
    @media ${device.tablet} {
      margin-right: 40px;
    }
  }

  h1 {
    font-size: 32px;
    text-align: left;

    @media ${device.ultraLarge} {
      font-size: 36px;
    }
  }

  p {
    font-size: 22px;
    text-align: left;

    @media ${device.ultraLarge} {
      font-size: 24px;
    }
  }

  h1,
  p {
    padding-bottom: 30px;
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
