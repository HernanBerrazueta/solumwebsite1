import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Container, Input, ValidationMessage } from "./Form.styled";
import { Title } from "../../components/homepage/carousel/Carousel.styled";
import { ButtonContainer } from "../../components/homepage/insights/Insights.styled";
import { ButtonText } from "../../components/about/team/Team.styled";
import { formText } from "../../components/homepage/contact/data";

const Form: React.FC = () => {
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [queryError, setQueryError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim() === "" || email.trim() === "" || subject.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError(true);
    }
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
      <form onSubmit={handleSubmit}>
        <Container>
          <Input
            style={{ minHeight: 150 }}
            type="text"
            placeholder="Enter your query (the more detail, the better!)"
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
          />
          {subjectError && (
            <ValidationMessage>Please enter the subject.</ValidationMessage>
          )}
        </Container>
        <ButtonContainer formbutton="true">
          <Link to="/contact">
            <Button variant="contained" color="primary" type="submit">
              <ButtonText style={{ minWidth: 90 }}>{formText}</ButtonText>
            </Button>
          </Link>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default Form;
