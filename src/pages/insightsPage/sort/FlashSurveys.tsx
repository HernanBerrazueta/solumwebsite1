import React from "react";
import ButtonComponent from "../../../common/Button";
import { buttonText } from "../../../components/homepage/contact/data";
import { flashSurveys } from "./articles";
import { FlashTitle, FlashWrapper } from "./ArticlesList.styled";

interface FlashSurveys {
  title: string;
  passage_one: string;
  passage_two: string;
  passage_three: string;
}

const FlashSurveys: React.FC = () => {
  return (
    <FlashWrapper>
      <FlashTitle>Our Flash Survey Programme</FlashTitle>
      {flashSurveys.map((text) => (
        <p>{text}</p>
      ))}
      <ButtonComponent text={buttonText} to="/contact" />
    </FlashWrapper>
  );
};

export default FlashSurveys;
