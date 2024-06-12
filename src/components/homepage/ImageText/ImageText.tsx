import React from "react";
import { useLocation } from "react-router-dom";
import Image from "./Image";
import Text from "./Text";
import { Container, FlexWrap } from "./ImageText.styled";
import { imageData } from "./data";
import ButtonComponent from "../../../common/Button";
import { buttonTextInsights } from "../../../components/homepage/contact/data";
import { FadeInAnimation } from "../../animations/animations";
import { ButtonContainer } from "../../homepage/insights/Insights.styled"; // Import the updated styled component

const ImageText: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isConsultancyPage = location.pathname === "/consultancy";
  const isDisputePage = location.pathname === "/dispute-services";
  const isInsightsPublicationsPage =
    location.pathname === "/insights/publications";

  let imageIndex: number = 0;

  if (isHomePage) {
    imageIndex = 0;
  } else if (isAboutPage) {
    imageIndex = 1;
  } else if (isConsultancyPage) {
    imageIndex = 2;
  } else if (isDisputePage) {
    imageIndex = 3;
  } else if (isInsightsPublicationsPage) {
    imageIndex = 4;
  }

  const subtitle = isHomePage ? (
    <strong>{imageData[imageIndex]?.subtitle}</strong>
  ) : (
    imageData[imageIndex]?.subtitle
  );

  return (
    <Container style={{ height: "100%" }}>
      <Image src={imageData[imageIndex].src} alt={imageData[imageIndex].alt} />
      <FlexWrap>
        <FadeInAnimation $delay="0s">
          <Text
            title={imageData[imageIndex].title}
            subtitle={subtitle}
            text={imageData[imageIndex].text}
            subText={imageData[imageIndex]?.subText}
          />
          {isInsightsPublicationsPage && (
            <FadeInAnimation $delay="0.3s">
              <ButtonContainer isinsightspage="true">
                <ButtonComponent text={buttonTextInsights} to="/contact" />
              </ButtonContainer>
            </FadeInAnimation>
          )}
        </FadeInAnimation>
      </FlexWrap>
    </Container>
  );
};

export default ImageText;
