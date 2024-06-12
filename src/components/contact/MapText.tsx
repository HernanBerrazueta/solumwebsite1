import React from "react";
import { useLocation } from "react-router-dom";
import Text from "../homepage/ImageText/Text";
import MapComponent from "./MapComponent";
import Form from "../../components/contact/Form";
import {
  Container,
  Content,
  IconsColumn,
  TextColumn,
} from "../homepage/ImageText/ImageText.styled";
import { imageData } from "../homepage/ImageText/data";
import { FadeInAnimation } from "../animations/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

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
        <IconsColumn>
          <div>
            <FadeInAnimation $delay="0.1s">
              <a href="mailto:email@example.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </FadeInAnimation>
          </div>
          <div>
            <FadeInAnimation $delay="0.2s">
              <a href="tel:+447 (0) 207869230">
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </FadeInAnimation>
          </div>
          <div>
            <FadeInAnimation $delay="0.3s">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </FadeInAnimation>
          </div>
        </IconsColumn>
        <TextColumn>
          <FadeInAnimation $delay="0s">
            <Text
              title={imageData[imageIndex].title}
              subtitle={imageData[imageIndex].subtitle}
              text={imageData[imageIndex].text}
              subText={formatSubText(imageData[imageIndex].subText)}
            />
          </FadeInAnimation>
        </TextColumn>
      </Content>
    </Container>
  );
};

export default MapText;
