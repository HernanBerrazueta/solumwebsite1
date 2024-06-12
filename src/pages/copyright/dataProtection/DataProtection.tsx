import React, { useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import { Container, Header, TextStyled } from "../cookies/Cookies.styled";

const DataProtection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container style={{ paddingBottom: 250 }}>
        <Header>Data Protection Policy</Header>
        <TextStyled>
          Please click{" "}
          <a
            href="https://www.xplainfinancial.com/wp-content/uploads/2022/02/Data-Protection-Policy-2022.pdf"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: "underline" }}
          >
            here
          </a>{" "}
          to view our Data Protection Policy.
        </TextStyled>
      </Container>
      <Footer />
    </>
  );
};

export default DataProtection;
