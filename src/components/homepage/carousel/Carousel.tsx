import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {
  StyledCarousel,
  CarouselWrapper,
  SlideContent,
  Title,
  Paragraph,
  Quote,
} from "./Carousel.styled";

interface SlideData {
  content: string;
  signature: string;
}

interface Data {
  data: SlideData[];
  title: string;
}

const Carousel: React.FC<Data> = ({ data, title }) => {
  const splideRef = useRef<Splide | null>(null);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(0);
    }
  }, []);

  const splideOptions = {
    type: "fade",
    rewind: false,
    height: "300px",
    gap: "10px",
    pagination: false,
    arrows: data.length > 1,
  };

  return (
    <StyledCarousel>
      <Title>{title}</Title>
      <CarouselWrapper>
        <Splide options={splideOptions} ref={splideRef}>
          {data.map((slide, index) => (
            <SplideSlide key={index}>
              <SlideContent>
                <Quote>{slide.content}</Quote>
                <Paragraph>{slide.signature}</Paragraph>
              </SlideContent>
            </SplideSlide>
          ))}
        </Splide>
      </CarouselWrapper>
    </StyledCarousel>
  );
};

export default Carousel;
