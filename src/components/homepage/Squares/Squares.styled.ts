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
  // background-color: ${theme.palette.text.primary};

  @media ${device.mobile} {
    flex-direction: column;
    margin: 0;
  }

  @media ${device.tablet} {
    flex-direction: row;
    gap: 20px;
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
    padding: 10px;
  }

  @media ${device.desktop} {
    padding: 50px;
  }

  @media ${device.ultraLarge} {
    padding: 100px;
  }
`;

export const Heading = styled.h3`
  font-size: 24px;
  margin-bottom: 50px;

  @media ${device.smallTablet} {
    margin-bottom: 0px;
  }
  @media ${device.desktop} {
    margin-bottom: 50px;
  }
`;

export const Column = styled(CommonStyles)<ColumnProps>`
  background-color: ${({ $isOdd }) =>
    $isOdd ? "#f0ecf3" : theme.palette.primary.main};
  color: ${({ $isOdd }) => ($isOdd ? theme.palette.primary.main : "#fff")};
  cursor: pointer;
  border-radius: 5px;
  border: 5px solid #fff;

  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;

  &: hover {
    box-shadow: ${({ $isOdd }) =>
      $isOdd
        ? "0 2px 4px rgba(40, 41, 61, 0.04), 0 8px 16px rgba(96, 97, 112, 0.16)"
        : "0 2px 4px rgb(6 6 6 / 14%), 0 8px 16px rgb(0 0 0 / 26%)"};
  }

  @media ${device.mobileOnly} {
    width: 100%;
    justify-content: center;
  }

  @media ${device.smallTablet} {
    height: calc(33vw - 40px);
  }
  @media ${device.tablet} {
    min-height: 300px;
  }

  @media ${device.ultraLarge} {
    padding: 0 120px;
  }
`;
