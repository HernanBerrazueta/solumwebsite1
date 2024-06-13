import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import ImageText from "../../components/homepage/ImageText/ImageText";
// import TextImage from "../../components/homepage/TextImage/TextImage";
// import PromiseComponent from "../../components/about/promise/Promise";
import TeamComponent from "../../components/about/team/Team";
import Carousel from "../../components/homepage/carousel/Carousel";
import {
  // Container,
  TopContainer,
} from "../../components/services/Services.styled";
import {
  aboutPageCarouselTitle,
  aboutPageCarouselData,
} from "../../components/homepage/carousel/data";

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopContainer style={{ marginBottom: 50 }}>
        <ImageText />
      </TopContainer>
      {/* <Container>
        <TextImage />
      </Container> */}
      <Carousel data={aboutPageCarouselData} title={aboutPageCarouselTitle} />
      {/* <Container>
        <PromiseComponent />
      </Container> */}
      <TeamComponent />
      <Footer />
    </>
  );
};

export default AboutPage;
