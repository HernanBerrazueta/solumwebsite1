import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import ImageText from "../../components/homepage/ImageText/ImageText";
import PromiseComponent from "../../components/about/promise/Promise";
import Grid from "../../components/services/grid/Grid";
import Carousel from "../../components/homepage/carousel/Carousel";
import {
  consultancyPageCarouselTitle,
  consultancyPageCarouselData,
} from "../../components/homepage/carousel/data";
import { buttonText } from "../../components/homepage/contact/data";
import {
  Container,
  TopContainer,
} from "../../components/services/Services.styled";
import ButtonComponent from "../../common/Button";

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopContainer>
        <ImageText />
      </TopContainer>
      <Container>
        <PromiseComponent />
        <Grid />
      </Container>

      <Carousel
        data={consultancyPageCarouselData}
        title={consultancyPageCarouselTitle}
      />
      <ButtonComponent text={buttonText} to="/contact" />
      <Footer />
    </>
  );
};

export default ServicesPage;
