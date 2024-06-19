import styled from "styled-components";
import { Button } from "@mui/material";
import theme from "../../../../theme";
import { device } from "../../../../utils/device";

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseBtn = styled(Button)`
  position: absolute !important;
  top: 5px;
  right: 5px;
  z-index: 3;
`;

export const Card = styled.div<{ open: boolean }>`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  border-radius: 15px;
  background-color: #fff;
  color: ${theme.palette.primary.main};
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
  max-width: 552px;
  height: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(48, 35, 83, 1) 52%
    );
    border-radius: 10px;
  }

  scrollbar-width: thin;
  scrollbar-color: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(48, 35, 83, 1) 52%
    )
    transparent;

  ::-ms-scrollbar {
    width: 8px;
  }

  @media ${device.mobileOnly} {
    top: 40%;
    max-height: 70vh;
    width: 95vw;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  filter: grayscale(100%);
  border-top-left-radius: 15px;
`;

export const CardContentWrapper = styled.div`
  padding: 20px 20px 40px;
`;

export const CardPersonalDataWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardPersonalData = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 10px;
`;

export const CardPersonalDataColumns = styled(CardPersonalData)`
  justify-content: space-around;
  color: ${theme.palette.primary.main};
`;

export const CardPersonalLinks = styled.a`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

export const CardPersonalLinkedIn = styled(CardPersonalLinks)`
  align-items: center;
`;

export const CardName = styled.p`
  color: ${theme.palette.primary.main};
  font-size: 22px;
`;

export const CardPersonalDescription = styled(CardName)`
  padding: 30px 30px 0;
  font-size: 16px;
  line-height: 1.75;
  text-align: justify;

  @media ${device.mobileOnly} {
    padding: 30px 0 0;
  }
`;

export const CardPosition = styled(CardName)`
  color: ${theme.palette.primary.main};
  font-size: 20px;
`;

export const CardContactDetails = styled(CardName)`
  font-size: 13px;
`;
