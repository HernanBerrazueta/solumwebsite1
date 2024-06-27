import React from "react";
import ButtonComponent from "../../../common/Button";
import { buttonText } from "../../../components/homepage/contact/data";
import { flashSurveys } from "./articles";
import { FlashWrapper } from "./ArticlesList.styled";

interface FlashSurveys {
  title: string;
  passage_one: string;
  passage_two: string;
  passage_three: string;
}

const FlashSurveys: React.FC = () => {
  return (
    <FlashWrapper>
      <div
        style={{
          display: "inline-block",
          paddingBottom: 30,
          backgroundColor: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontFamily: "CircularXXWeb-Medium, sans-serif",
          }}
        >
          Our Flash Survey Programme
        </h2>
      </div>
      {flashSurveys.map((text) => (
        <p style={{ backgroundColor: "#fff", fontSize: "22px" }}>{text}</p>
      ))}
      <ButtonComponent text={buttonText} to="/contact" />
    </FlashWrapper>
  );
};

export default FlashSurveys;
