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

const Insights: React.FC = () => {
  const handleImageClick = (pdf: string) => {
    window.open(pdf, "_blank");
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Our Insights</Title>
      </TitleContainer>
      <ContentContainer>
        {insightsData.map(({ image, title, description, pdf }, index) => (
          <ImageContainer key={description}>
            <Image
              src={image}
              alt={description}
              style={index === 0 ? { border: "1px solid #302353" } : {}}
              onClick={() => handleImageClick(pdf)}
            />
            <TextContainer>
              <Paragraph
                style={{ fontFamily: "CircularXXWeb-Medium, sans-serif" }}
              >
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
