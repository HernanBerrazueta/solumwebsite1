import { useEffect } from "react";
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

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopContainer>
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
