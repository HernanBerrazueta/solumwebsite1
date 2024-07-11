import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import ImageText from "../../components/homepage/ImageText/ImageText";
import TeamComponent from "../../components/about/team/Team";
import Carousel from "../../components/homepage/carousel/Carousel";
import { TopContainer } from "../../components/services/Services.styled";
import {
  aboutPageCarouselTitle,
  aboutPageCarouselData,
} from "../../components/homepage/carousel/data";
import { size } from "../../utils/device";
import useMatchMedia from "../../hooks/useMediaQuery";

const AboutPage: React.FC = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const { isMobile } = useMatchMedia();

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxHeight = parseInt(size.maxHeight.replace("px", ""));
  const minHeight = parseInt(size.minHeight.replace("px", ""));

  const heroHeight =
    isMobile || height > maxHeight || height < minHeight
      ? "100%"
      : "calc(100vh - 130px)";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopContainer style={{ marginBottom: 50 }} $heroheight={heroHeight}>
        <ImageText />
      </TopContainer>
      <Carousel data={aboutPageCarouselData} title={aboutPageCarouselTitle} />
      <TeamComponent />
      <Footer />
    </>
  );
};

export default AboutPage;
