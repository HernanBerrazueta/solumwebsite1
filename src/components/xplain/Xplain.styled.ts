import styled from "styled-components";
import theme from "../../theme";

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${theme.palette.primary.main};
  text-align: center;
  position: relative; // Ensure the container is relative to position the image correctly
`;

export const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  width: 350px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ComingSoonText = styled.h1`
  font-size: 2.5rem;
  color: ${theme.palette.secondary.main};
  margin-bottom: 1rem;
`;

export const Logo = styled.img`
  width: 350px;
  margin: 50px 0;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${theme.palette.primary.light};
  margin-bottom: 50px;
  font-family: CircularXXWeb-Medium, sans-serif;
`;

export const Paragraph = styled.p`
  font-size: 1.25rem;
  color: ${theme.palette.text.primary};
  margin-bottom: 2rem;
`;
