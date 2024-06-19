import styled, { css } from "styled-components";
import theme from "../../theme";
import { device } from "../../utils/device";

export const Container = styled.div<{ formcontainer?: string }>`
  display: flex;
  flex-direction: column;
  // background-color: ${theme.palette.text.primary};
  margin-bottom: 15px;
  color: ${theme.palette.text.primary};

  ${(props) =>
    props.formcontainer &&
    css`
      max-width: 0px;
    `}
`;

export const Input = styled.input`
  padding: 5px 10px;
  background-color: ${theme.palette.text.primary};
  border: 1px solid ${theme.palette.primary.main};
  color: ${theme.palette.primary.main};
  border-radius: 0;
  font-size: 1rem;
  line-height: 1.5;

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus {
    outline: none;
    border-color: ${theme.palette.primary.main};
    box-shadow: none;
  }

  @media ${device.mobileOnly} {
    width: 335px;
  }
  @media ${device.smallTablet} {
    min-width: 350px;
  }
`;

export const ValidationMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
  min-width: 350px;
`;
