import { BannerWrapper, BannerWrapperContainer } from "./Banner.styled";
import ImagesSection from "./ImagesSection";
import { disputeImages, consultancyImages } from "../data";

interface BannerProps {
  pageType: "DisputePage" | "ConsultancyPage";
}

const Banner: React.FC<BannerProps> = ({ pageType }) => {
  const images = pageType === "DisputePage" ? disputeImages : consultancyImages;
  const hasAnimation = pageType === "DisputePage";

  return (
    <BannerWrapperContainer $hasanimation={hasAnimation}>
      <BannerWrapper $hasanimation={hasAnimation}>
        <ImagesSection images={images} hasAnimation={hasAnimation} />
        {hasAnimation && (
          <ImagesSection images={images} hasAnimation={hasAnimation} />
        )}
      </BannerWrapper>
    </BannerWrapperContainer>
  );
};

export default Banner;
