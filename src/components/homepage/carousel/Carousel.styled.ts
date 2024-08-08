import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const StyledCarousel = styled.div`
  max-width: 100vw;
  margin-top: 50px;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  background-color: ${theme.palette.primary.main};
  margin-top: 50px;

  .splide__arrow--prev {
    margin-left: 50px;

    @media ${device.mobileOnly} {
      left: 10px !important;
      margin-left: 0px;
    }
    @media ${device.smallTablet} {
      margin-left: 30px;
    }
  }

  .splide__arrow--next {
    margin-right: 50px;

    @media ${device.mobileOnly} {
      right: 10px !important;
      margin-right: 0px;
    }
    @media ${device.smallTablet} {
      margin-right: 30px;
    }
  }

  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
    margin-top: 50px;
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: ${theme.palette.text.primary};
  width: 100%;
  height: 100%;
  padding: 100px 150px;
  margin: 0 auto;

  @media ${device.mobileOnly} {
    font-size: 12px;
    padding: 0px 50px;
  }
  @media ${device.smallTablet} {
    padding: 0px 110px;
    font-size: 18px;
  }
  @media ${device.tablet} {
    font-size: 22px;
  }
  @media ${device.ultraLarge} {
    font-size: 24px;
  }

  & > :nth-child(2) {
    color: ${theme.palette.text.secondary};
  }
`;

export const Quote = styled.q`
  font-family: "CircularXXWeb-Medium", sans-serif;
`;

export const Paragraph = styled.p`
  margin: 25px 0;
`;

export const Title = styled.h2`
  font-family: "CircularXXWeb-Medium", sans-serif;
  font-size: 32px;
  color: ${theme.palette.primary.main};
  background-color: #ffffff;
  display: inline-block;
  margin: 50px 70px;

  @media ${device.mobileOnly} {
    font-size: 28px;
    margin: 30px 20px;
  }

  @media ${device.smallTablet} {
    margin: 50px 30px;
  }

  @media ${device.tablet} {
    margin: 50px 30px;
  }

  @media ${device.desktop} {
    margin: 50px 70px;
  }

  @media ${device.ultraLarge} {
    font-size: 36px !important;
  }
`;
