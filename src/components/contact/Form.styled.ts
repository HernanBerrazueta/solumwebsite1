import styled, { css } from "styled-components";
import theme from "../../theme";
import { device } from "../../utils/device";

export const Container = styled.div<{ formcontainer?: string }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: ${theme.palette.text.primary};

  ${(props) =>
    props.formcontainer &&
    css`
      max-width: 0px;
    `}
`;

export const Input = styled.input`
  padding: 3px 10px 5px 10px;
  background-color: ${theme.palette.text.primary};
  border: 1px solid ${theme.palette.primary.main};
  color: ${theme.palette.primary.main};
  border-radius: 0;
  font-size: 1rem;
  line-height: 1.5;
  position: relative;

  &::placeholder {
    // position: absolute;
    // top: 7px;
    // left: 10px;
    // bottom: 20px;
    color: #c4c4c4;
  }

  &:focus::placeholder,
  &:not(:placeholder-shown)::placeholder {
    bottom: 20px;
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

export const TextAreaStyled = styled.textarea`
  font-family: "CircularXXWeb-Regular", sans-serif;
  font-size: 1rem;
  line-height: 1.5;

  padding: 5px 10px;

  border: 1px solid ${theme.palette.primary.main};
  background-color: ${theme.palette.text.primary};
  color: ${theme.palette.primary.main};

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus {
    outline: none;
    border-color: ${theme.palette.primary.main};
    box-shadow: none;
  }

  @media ${device.mobile} {
    width: 335px;
    max-width: 335px;
    min-width: 335px;

    height: 100px;
    max-height: 150px;
    min-height: 55px;
  }

  @media ${device.smallTablet} {
    width: 450px;
    max-width: 450px;
    min-width: 450px;

    height: 150px;
    max-height: 250px;
    min-height: 55px;
  }
  @media ${device.ultraLarge} {
    width: 850px;
    max-width: 850px;
    min-width: 850px;

    height: 250px;
    max-height: 550px;
    min-height: 155px;
  }
`;
