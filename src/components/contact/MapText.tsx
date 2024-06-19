import React from "react";
import { useLocation } from "react-router-dom";
import Text from "../homepage/ImageText/Text";
import MapComponent from "./MapComponent";
import Form from "../../components/contact/Form";
import {
  Container,
  Content,
  TextColumn,
} from "../homepage/ImageText/ImageText.styled";
import { imageData } from "../homepage/ImageText/data";
import { FadeInAnimation } from "../animations/animations";

const MapText: React.FC = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  let imageIndex: number = 0;

  if (isContactPage) {
    imageIndex = 5;
  }

  const formatSubText = (subText: string) => {
    return subText.split("<br>").map((text, index) => (
      <React.Fragment key={index}>
        {text}
        {index < subText.split("<br>").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <Container>
      <div>
        <MapComponent />
        <Form />
      </div>
      <Content>
        <TextColumn>
          <FadeInAnimation $delay="0s">
            <Text
              title={imageData[imageIndex].title}
              subtitle={imageData[imageIndex].subtitle}
              text={imageData[imageIndex].text}
              subText={formatSubText(imageData[imageIndex].subText)}
              showIcons={isContactPage} // Pass a prop to indicate when to show icons
            />
          </FadeInAnimation>
        </TextColumn>
      </Content>
    </Container>
  );
};

export default MapText;
