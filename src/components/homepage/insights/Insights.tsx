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
  return (
    <Container>
      <TitleContainer>
        <Title>Our Insights</Title>
      </TitleContainer>
      <ContentContainer>
        {insightsData.map(({ image, title, description }, index) => (
          <ImageContainer key={description}>
            <Image
              src={image}
              alt={description}
              style={index === 0 ? { border: "1px solid #302353" } : {}}
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
