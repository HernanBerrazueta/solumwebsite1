import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import ImageText from "../../components/homepage/ImageText/ImageText";
import PromiseComponent from "../../components/about/promise/Promise";
import Grid from "../../components/services/grid/Grid";
import Carousel from "../../components/homepage/carousel/Carousel";
import Banner from "../../components/services/dispute/banner/Banner";
import ButtonComponent from "../../common/Button";
import {
  disputePageCarouselTitle,
  disputePageCarouselData,
} from "../../components/homepage/carousel/data";
import { buttonText } from "../../components/homepage/contact/data";
import {
  Container,
  TopContainer,
} from "../../components/services/Services.styled";

const DisputePage: React.FC = () => {
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
        data={disputePageCarouselData}
        title={disputePageCarouselTitle}
      />
      <Banner pageType="DisputePage" />
      <ButtonComponent text={buttonText} to="/contact" />
      <Footer />
    </>
  );
};

export default DisputePage;
