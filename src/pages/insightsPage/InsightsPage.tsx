import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import { TopContainer } from "../../components/services/Services.styled";
import { size } from "../../utils/device";
import useMatchMedia from "../../hooks/useMediaQuery";

const InsightsNewsPage: React.FC = () => {
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
        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#000" }}>Insights News Page</h1>
        </div>
      </TopContainer>
      <Footer />
    </>
  );
};

export default InsightsNewsPage;
