import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import MapText from "../../components/contact/MapText";
import { Container } from "../../components/services/Services.styled";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <MapText />
      </Container>
      <Footer />
    </>
  );
};

export default ContactPage;
