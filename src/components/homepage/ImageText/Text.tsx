import React from "react";
import { FadeInAnimation } from "../../animations/animations";
import { FlexWrap } from "./ImageText.styled";

interface TextProps {
  title: string;
  subtitle: React.ReactNode;
  text: React.ReactNode;
  subText: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ title, subtitle, text, subText }) => {
  return (
    <FlexWrap style={{ zIndex: 1 }}>
      <FadeInAnimation $delay="0s">
        <h1 style={{ marginBottom: "20px", fontSize: 32 }}>{title}</h1>
      </FadeInAnimation>
      <FadeInAnimation $delay="0.1s">
        <p style={{ fontSize: 22 }}>{subtitle}</p>
      </FadeInAnimation>
      <FadeInAnimation $delay="0.2s">
        <p style={{ fontSize: 22 }}>{text}</p>
      </FadeInAnimation>
      <FadeInAnimation $delay="0.3s">
        <p style={{ fontSize: 22 }}>{subText}</p>
      </FadeInAnimation>
    </FlexWrap>
  );
};

export default Text;
