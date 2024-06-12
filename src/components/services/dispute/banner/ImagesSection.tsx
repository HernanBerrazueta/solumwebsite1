import React from "react";
import { Images, ImageStyled } from "./Banner.styled";

interface BannerProps {
  images: {
    src: string;
    name: string;
  }[];
}

const ImagesSection: React.FC = ({ images }: BannerProps) => {
  return (
    <>
      <Images>
        {images.map(({ src, name }) => (
          <div key={name}>
            <ImageStyled src={src} alt={name} />
          </div>
        ))}
      </Images>
    </>
  );
};

export default ImagesSection;
