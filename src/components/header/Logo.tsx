import React from "react";
import { LogoImage, LogoWrapper } from "./Header.styled";

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <>
      <LogoWrapper to="/">
        <LogoImage src={src} alt={alt} />
      </LogoWrapper>
    </>
  );
};

export default Logo;
