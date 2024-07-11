import { useEffect, useState } from "react";
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
import { size } from "../../utils/device";
import useMatchMedia from "../../hooks/useMediaQuery";

const DisputePage: React.FC = () => {
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
