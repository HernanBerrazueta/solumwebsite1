import { useEffect, useState } from "react";
import ImageText from "../../components/homepage/ImageText/ImageText";
import Squares from "../../components/homepage/Squares/Squares";
import TextImage from "../../components/homepage/TextImage/TextImage";
import Carousel from "../../components/homepage/carousel/Carousel";
import Insights from "../../components/homepage/insights/Insights";
import Contact from "../../components/homepage/contact/Contact";
import Footer from "../../components/footer/Footer";
import {
  homePageCarouselTitle,
  homePageCarouselData,
} from "../../components/homepage/carousel/data";
import {
  Container,
  TopContainer,
} from "../../components/services/Services.styled";
import { size } from "../../utils/device";
import useMatchMedia from "../../hooks/useMediaQuery";

const HomePage: React.FC = () => {
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
      <TopContainer $heroheight={heroHeight}>
        <ImageText />
      </TopContainer>
      <Container>
        <Squares />
      </Container>
      <Container>
        <TextImage />
      </Container>
      <Carousel data={homePageCarouselData} title={homePageCarouselTitle} />
      <Insights />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
