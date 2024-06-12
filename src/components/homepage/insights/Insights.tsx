import React from "react";
import {
  Container,
  Title,
  ImageContainer,
  Image,
  ContentContainer,
  TextContainer,
  Paragraph,
  TitleContainer,
} from "./Insights.styled";
import { insightsData, buttonText } from "./data";
import ButtonComponent from "../../../common/Button";
import useMatchMedia from "../../../hooks/useMediaQuery";

const Insights: React.FC = () => {
  const { isMobile } = useMatchMedia();
  const background: string =
    "linear-gradient(180deg, rgba(255, 255, 255, 1) 30%, rgba(238, 236, 243, 1) 30%)";

  return (
    <Container
      style={{
        background: isMobile ? "fff" : background,
        paddingBottom: isMobile ? 0 : 50,
      }}
    >
      <TitleContainer>
        <Title>Our Insights</Title>
      </TitleContainer>
      <ContentContainer>
        {insightsData.map(({ image, title, description }) => (
          <ImageContainer key={description}>
            <Image src={image} alt={description} />
            <TextContainer>
              <Paragraph>
                <strong>{title}</strong>
              </Paragraph>
              <Paragraph>{description}</Paragraph>
            </TextContainer>
          </ImageContainer>
        ))}
      </ContentContainer>
      <ButtonComponent text={buttonText} to="/insights/publications" />
    </Container>
  );
};

export default Insights;
