import styled from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100vw;
  padding: 0 70px;

  @media ${device.mobileOnly} {
    padding: 120px 20px 0;
  }
`;

export const TopContainer = styled(Container)`
  height: calc(100vh - 130px);

  @media ${device.mobileOnly} {
    height: 100%;
    padding-top: 120px;
  }
`;
