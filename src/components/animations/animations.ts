import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FadeInAnimation = styled.div<{ $delay: string }>`
  animation: ${fadeIn} 0.3s ease-in-out forwards;
  opacity: 0;
  animation-delay: ${({ $delay }) => $delay};
`;
