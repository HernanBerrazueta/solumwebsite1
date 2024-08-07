import React from "react";
import Button from "@mui/material/Button";
import { useLocation, Link } from "react-router-dom";
import { ButtonContainer } from "../../homepage/insights/Insights.styled";
import { FadeInAnimation } from "../../animations/animations";
import { ButtonText } from "../../about/team/Team.styled";
import { buttonTextInsights } from "../../homepage/contact/data";
import { FlexWrap, TextStyled, TitleStyled } from "./ImageText.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

interface TextProps {
  title: string;
  subtitle: React.ReactNode;
  text: React.ReactNode;
  subText: React.ReactNode;
  showIcons?: boolean;
}

const Text: React.FC<TextProps> = ({
  title,
  subtitle,
  text,
  subText,
  showIcons = false,
}) => {
  const location = useLocation();
  const isInsightsPage = location.pathname === "/insights/publications";
  const isContactPage = location.pathname === "/contact";

  return (
    <FlexWrap>
      <FadeInAnimation $delay="0s">
        <TitleStyled style={{ maxWidth: 800 }}>{title}</TitleStyled>
      </FadeInAnimation>
      <FadeInAnimation
        $delay="0.1s"
        style={{
          display: isContactPage ? "flex" : "block",
          alignItems: isContactPage ? "baseline" : undefined,
        }}
      >
        {showIcons && isContactPage && (
          <FontAwesomeIcon style={{ marginRight: 15 }} icon={faEnvelope} />
        )}
        <TextStyled
          style={{ maxWidth: 800, padding: subtitle === "" ? 0 : undefined }}
        >
          {subtitle}
        </TextStyled>
      </FadeInAnimation>
      <FadeInAnimation
        $delay="0.2s"
        style={{
          display: isContactPage ? "flex" : "block",
          alignItems: isContactPage ? "baseline" : undefined,
        }}
      >
        {showIcons && isContactPage && (
          <FontAwesomeIcon style={{ marginRight: 15 }} icon={faPhone} />
        )}
        <TextStyled style={{ maxWidth: 800 }}>{text}</TextStyled>
      </FadeInAnimation>
      <FadeInAnimation
        $delay="0.3s"
        style={{
          display: isContactPage ? "flex" : "block",
          alignItems: isContactPage ? "baseline" : undefined,
        }}
      >
        {showIcons && isContactPage && (
          <FontAwesomeIcon style={{ marginRight: 15 }} icon={faMapMarkerAlt} />
        )}
        <TextStyled
          style={{
            maxWidth: 800,
            paddingBottom: 0,
            display: isInsightsPage ? "inline-block" : "block",
          }}
        >
          {subText}
        </TextStyled>
      </FadeInAnimation>
      {isInsightsPage && (
        <FadeInAnimation $delay="0.3s">
          <ButtonContainer formbutton="true">
            <Link to="/contact">
              <Button
                style={{ marginTop: 20 }}
                variant="contained"
                color="primary"
                type="submit"
              >
                <ButtonText style={{ minWidth: 90 }}>
                  {buttonTextInsights}
                </ButtonText>
              </Button>
            </Link>
          </ButtonContainer>
        </FadeInAnimation>
      )}
    </FlexWrap>
  );
};

export default Text;
