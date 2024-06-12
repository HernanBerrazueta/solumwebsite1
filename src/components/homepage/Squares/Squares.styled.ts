import styled from "styled-components";
import theme from "../../../theme";
import { device } from "../../../utils/device";

interface ColumnProps {
  $isOdd: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 50px;
  margin: 70px 0;
  font-size: 22px;
  line-height: 1.6;
  background-color: ${theme.palette.text.primary};

  @media ${device.mobileOnly} {
    flex-direction: column;
  }

  @media ${device.desktop} {
    font-size: 20px;
  }

  @media ${device.ultraLarge} {
    font-size: 22px;
  }
`;

export const CommonStyles = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${theme.palette.text.primary};

  @media ${device.mobile} {
    padding: 20px;
  }

  @media ${device.tablet} {
    padding: 30px;
  }

  @media ${device.desktop} {
    padding: 50px;
  }

  @media ${device.ultraLarge} {
    padding: 100px;
  }
`;

export const Heading = styled.h3`
  font-size: 18px;
  margin-bottom: 50px;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const Column = styled(CommonStyles)<ColumnProps>`
  background-color: ${({ $isOdd }) =>
    $isOdd ? "#f0ecf3" : theme.palette.primary.main};
  color: ${({ $isOdd }) => ($isOdd ? theme.palette.primary.main : "#fff")};
  justify-content: space-between;
  cursor: pointer;
  width: calc(33vw - 70px);

  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;

  &: hover {
    box-shadow: ${({ $isOdd }) =>
      $isOdd
        ? "0 2px 4px rgba(40, 41, 61, 0.04), 0 8px 16px rgba(96, 97, 112, 0.16)"
        : "0 2px 4px rgb(6 6 6 / 14%), 0 8px 16px rgb(0 0 0 / 26%)"};
  }

  @media ${device.mobileOnly} {
    width: 100%;
  }

  @media ${device.desktop} {
    height: 350px;
  }

  @media ${device.ultraLarge} {
    height: 450px;
  }
`;
