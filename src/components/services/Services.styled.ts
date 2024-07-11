import styled from "styled-components";
import { device } from "../../utils/device";

interface HeightProps {
  $heroheight?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100vw;
  padding: 0 70px;

  @media ${device.mobileOnly} {
    padding: 0 20px;
  }
  @media ${device.smallTablet} {
    padding: 50px 30px 0;
  }

  @media ${device.ultraLarge} {
    max-width: 2788px;
    margin: 0 auto;
  }
`;

export const TopContainer = styled(Container)<HeightProps>`
  padding-top: 0px;

  @media ${device.mobile} {
    // height: 100%;
  }

  @media ${device.desktop} {
    height: ${({ $heroheight }) => $heroheight};
  }

  @media ${device.ultraLarge} {
    height: ${({ $heroheight }) => $heroheight};
  }
`;
