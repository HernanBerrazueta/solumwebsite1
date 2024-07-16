import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {
  Container,
  Input,
  ValidationMessage,
  TextAreaStyled,
} from "./Form.styled";
import { Title } from "../../components/homepage/carousel/Carousel.styled";
import { ButtonContainer } from "../../components/homepage/insights/Insights.styled";
import { ButtonText } from "../../components/about/team/Team.styled";
import { formText } from "../../components/homepage/contact/data";
import useMatchMedia from "../../hooks/useMediaQuery";

const Form: React.FC = () => {
  const { isMobile } = useMatchMedia();
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [queryError, setQueryError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim() === "" || email.trim() === "" || subject.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
    //
    try {
      const response = await axios.post(
        "https://solum-sg-1143.twil.io/solum",
        {
          query: query,
          email: email,
          subject: subject,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      console.log("Email sent successfully:", response.data);

      setSubmitted(true);

      setQuery("");
      setEmail("");
      setSubject("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
    //
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleQueryBlur = () => {
    if (query.trim() === "") {
      setQueryError(true);
    } else {
      setQueryError(false);
    }
  };

  const handleEmailBlur = () => {
    if (email.trim() === "" || !isValidEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleSubjectBlur = () => {
    if (subject.trim() === "") {
      setSubjectError(true);
    } else {
      setSubjectError(false);
    }
  };

  return (
    <Container>
      <Title formTitle style={{ maxWidth: 300 }}>
        Get in Touch
      </Title>
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <Container>
            <TextAreaStyled
              placeholder="Please enter your query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onBlur={handleQueryBlur}
              required
            />
            {queryError && (
              <ValidationMessage>Please enter your query.</ValidationMessage>
            )}
          </Container>
          <Container formcontainer="true">
            <Input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleEmailBlur}
              required
              style={{
                fontFamily: "CircularXXWeb-Regular, sans-serif",
              }}
            />
            {emailError && (
              <ValidationMessage>Please enter a valid email.</ValidationMessage>
            )}
          </Container>
          <Container formcontainer="true">
            <Input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              onBlur={handleSubjectBlur}
              required
              style={{
                fontFamily: "CircularXXWeb-Regular, sans-serif",
              }}
            />
            {subjectError && (
              <ValidationMessage>Please enter the subject.</ValidationMessage>
            )}
          </Container>
          <ButtonContainer formbutton="true">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{
                marginLeft: isMobile ? "20px" : "0",
                marginBottom: isMobile ? "0" : "80px",
              }}
              disabled={
                query.trim() === "" ||
                !isValidEmail(email) ||
                subject.trim() === ""
              }
            >
              <ButtonText>{formText}</ButtonText>
            </Button>
          </ButtonContainer>
        </form>
      )}
      {submitted && (
        <Container>
          <p
            style={{
              color: "#302353",
              marginLeft: isMobile ? "22px" : "0",
            }}
          >
            Thank you! Your form has been submitted and we will be in touch with
            you shortly.
          </p>
        </Container>
      )}
    </Container>
  );
};

export default Form;
