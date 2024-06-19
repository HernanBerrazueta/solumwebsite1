import styled, { keyframes } from "styled-components";

const swipe = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Images = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 120px;
  animation: ${swipe} 35s linear infinite;
`;

export const ImageStyled = styled.img`
  width: 250px;
  max-height: 70px;
  object-fit: contain;
  margin: 0 20px;
`;

export const BannerWrapper = styled.div`
  background-color: #fff;
  max-width: 100%;
  width: 80vw;
  display: flex;

  &:hover > ${Images} {
    animation-play-state: paused;
  }
`;
export const BannerWrapperContainer = styled.div`
  height: 160px;
  width: 100%;
  overflow-x: hidden;
  padding: 10px 0;
`;
