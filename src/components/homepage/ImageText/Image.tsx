import React from "react";
import { ImageStyled } from "./ImageText.styled";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <ImageStyled src={src} alt={alt} />;
};

export default Image;
