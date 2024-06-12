import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import { TopContainer } from "../../components/services/Services.styled";

const InsightsNewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopContainer>
        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#000" }}>Insights News Page</h1>
        </div>
      </TopContainer>
      <Footer />
    </>
  );
};

export default InsightsNewsPage;
