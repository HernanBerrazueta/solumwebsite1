import { BannerWrapper, BannerWrapperContainer } from "./Banner.styled";
import ImagesSection from "./ImagesSection";

interface BannerProps {
  images: {
    src: string;
    name: string;
  }[];
}

const Banner: React.FC = ({ images }: BannerProps) => {
  return (
    <BannerWrapperContainer>
      <BannerWrapper>
        <ImagesSection images={images} />
        <ImagesSection images={images} />
      </BannerWrapper>
    </BannerWrapperContainer>
  );
};

export default Banner;
