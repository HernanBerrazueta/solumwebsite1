import styled, { keyframes, css } from "styled-components";
import { device } from "../../../../utils/device";

const swipe = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

interface HasAnimationProps {
  $hasanimation: boolean;
}

export const Images = styled.div<HasAnimationProps>`
  display: flex;
  align-items: center;
  height: ${({ $hasanimation }) => ($hasanimation ? "120px" : "100%")};
  flex-direction: ${({ $hasanimation }) => ($hasanimation ? "row" : "column")};
  gap: ${({ $hasanimation }) => ($hasanimation ? "30px" : "0px")};

  ${({ $hasanimation }) =>
    $hasanimation
      ? css`
          animation: ${swipe} 35s linear infinite;
        `
      : css`
          justify-content: center;

          @media ${device.mobile} {
            flex-direction: column;
            gap: 30px;
          }
          @media ${device.smallTablet} {
            flex-wrap: wrap;
            flex-direction: row;
          }
          @media ${device.desktop} {
            gap: 20px;
          }

          @media ${device.ultraLarge} {
            gap: 200px;
          }
        `};
`;

export const ImageStyled = styled.img<HasAnimationProps>`
  width: 250px;
  max-height: ${({ $hasanimation }) => ($hasanimation ? "70px" : "85px")};
  object-fit: contain;
  margin: 0px;
`;

export const BannerWrapper = styled.div<HasAnimationProps>`
  background-color: #fff;
  max-width: 100%;
  width: ${({ $hasanimation }) => ($hasanimation ? "80vw" : "100%")};
  display: flex;
  justify-content: ${({ $hasanimation }) =>
    $hasanimation ? "flex-start" : "center"};
  align-items: center;

  &:hover > ${Images} {
    animation-play-state: paused;
  }
`;

export const BannerWrapperContainer = styled.div<HasAnimationProps>`
  height: ${({ $hasanimation }) => ($hasanimation ? "160px" : "100%")};
  width: 100%;
  background-color: #fff;
  overflow-x: hidden;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
