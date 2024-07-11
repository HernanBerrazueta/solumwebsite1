import styled, { css } from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const StyledCarousel = styled.div`
  max-width: 100vw;
`;

export const CarouselWrapper = styled.div`
  background-color: ${theme.palette.primary.main};
  position: relative;
  text-align: center;
  width: 100%;

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
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;

  @media ${device.mobileOnly} {
    font-size: 12px;
    padding: 10px 50px;
  }
  @media ${device.smallTablet} {
    padding: 10px 110px;
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

interface TitleProps {
  formTitle?: boolean;
}

export const Title = styled.h2<TitleProps>`
  font-family: "CircularXXWeb-Medium", sans-serif;
  display: inline-block;
  text-align: left;
  color: ${theme.palette.primary.main};
  margin: 50px 0;
  padding-left: 70px;
  font-size: 32px;
  background-color: #fff;

  @media ${device.mobileOnly} {
    padding-left: 20px;
  }

  @media ${device.ultraLarge} {
    font-size: 36px;
  }

  ${({ formTitle }) =>
    formTitle &&
    css`
      padding-left: 0;
      margin: 60px 0 20px 0;
    `}
`;
