import React from "react";
import { Images, ImageStyled } from "./Banner.styled";

interface BannerProps {
  images: {
    src: string;
    name: string;
  }[];
  hasAnimation: boolean;
}

const ImagesSection: React.FC<BannerProps> = ({ images, hasAnimation }) => {
  return (
    <>
      <Images $hasanimation={hasAnimation}>
        {images.map(({ src, name }) => (
          <div key={name} style={{ maxWidth: 250 }}>
            <ImageStyled src={src} alt={name} $hasanimation={hasAnimation} />
          </div>
        ))}
      </Images>
    </>
  );
};

export default ImagesSection;
