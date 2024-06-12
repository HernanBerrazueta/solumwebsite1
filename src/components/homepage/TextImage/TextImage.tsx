import React from "react";
import { useLocation } from "react-router-dom";
import Image from "../ImageText/Image";
import Text from "../ImageText/Text";
import { Container } from "../TextImage/TextImage.styled";
import { imageData } from "./data";

const TextImage: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  let imageIndex: number;

  if (isHomePage) {
    imageIndex = 0;
  } else if (isAboutPage) {
    imageIndex = 1;
  }
  // else {
  //   imageIndex = 2;
  // }

  return (
    <Container>
      <Text
        title={imageData[imageIndex].title}
        subtitle={imageData[imageIndex]?.subtitle}
        text={imageData[imageIndex].text}
        subText={imageData[imageIndex]?.subText}
      />
      <Image src={imageData[imageIndex].src} alt={imageData[imageIndex].alt} />
    </Container>
  );
};

export default TextImage;
