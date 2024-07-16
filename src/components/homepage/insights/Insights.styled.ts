import styled, { css } from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: "CircularXXWeb-Medium", sans-serif;
  padding: 40px 70px;
  font-size: 32px;
  color: ${theme.palette.primary.main};

  @media ${device.mobileOnly} {
    padding: 40px 20px;
  }
  @media ${device.ultraLarge} {
    font-size: 36px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  padding: 0 20px;

  @media ${device.mobileOnly} {
    flex-direction: column;
    gap: 30px;
  }
  @media ${device.smallTablet} {
    padding: 0 20px;
  }
  @media ${device.ultraLarge} {
    font-size: 24px;
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 20px;

  @media ${device.mobile} {
    padding: 0 20px;
  }
  @media ${device.smallTablet} {
    padding: 10px;
  }
  @media ${device.desktop} {
    padding: 0 50px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  transform: scale(1);
  transition: all 0.3s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 2px 4px rgba(40, 41, 61, 0.04),
      0 8px 16px rgba(96, 97, 112, 0.16);
  }
`;

export const TextContainer = styled.div`
  margin-top: 10px;
  max-width: 40vw;

  @media ${device.mobileOnly} {
    max-width: 100vw;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  color: ${theme.palette.primary.main};

  @media ${device.ultraLarge} {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div<{
  formbutton?: string;
  isinsightspage?: string;
}>`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 100px;

  @media ${device.mobileOnly} {
    margin-top: 40px;
  }

  ${(props) =>
    props.formbutton &&
    css`
      margin-top: 20px;
      margin-bottom: 0 !important;
      justify-content: left;

      @media ${device.mobileOnly} {
        margin-bottom: 30px !important;
      }
    `}

  & > Button {
    font-size: 14px;
    border-radius: 7px;
    border: none;

    &:hover {
      background-color: ${theme.palette.primary.dark};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:focus {
      outline: none;
    }
  }
`;
