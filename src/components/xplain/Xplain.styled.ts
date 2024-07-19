import { device } from "../../utils/device";
import styled from "styled-components";
import theme from "../../theme";

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  position: relative;

  @media ${device.mobileOnly} {
    justify-content: flex-end;
  }
  @media ${device.ultraLarge} {
    height: calc(100vh - 313px);
    max-width: 2788px;
    margin: 0 auto;
  }
`;

export const NoView = styled.div`
  background-color: ${theme.palette.primary.main};
`;

export const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 320px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.tablet} {
    width: 420px;
  }
  @media ${device.ultraLarge} {
    width: 720px;
  }
`;

export const ComingSoonText = styled.h1`
  font-size: 36px;
  color: ${theme.palette.secondary.main};

  @media ${device.mobile} {
    position: relative;
    background-color: transparent;
    backdrop-filter: blur(2px);
    border-radius: 5px;
  }
`;

export const Logo = styled.img`
  width: 350px;
  margin: 50px 0;
  position: relative;

  @media ${device.mobileOnly} {
    width: 280px;
  }
`;

export const Title = styled.h2`
  font-family: CircularXXWeb-Medium, sans-serif;
  font-size: 36px;
  color: ${theme.palette.primary.light};
  margin-bottom: 50px;

  @media ${device.mobileOnly} {
    position: relative;
    background-color: transparent;
    backdrop-filter: blur(2px);
    border-radius: 5px;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.25rem;
  color: ${theme.palette.text.primary};
  margin-bottom: 2rem;
`;
