import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import ImageText from "../../components/homepage/ImageText/ImageText";
import ArticleList from "./sort/ArticlesList";
import {
  Container,
  TopContainer,
} from "../../components/services/Services.styled";

const InsightsPublicationsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopContainer>
        <ImageText />
      </TopContainer>
      <Container>
        <ArticleList />
      </Container>
      <Footer />
    </>
  );
};

export default InsightsPublicationsPage;
