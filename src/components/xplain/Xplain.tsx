import React from "react";
import XplainLogo from "../../assets/logos/xplain.svg";
import BackgroundImage from "../../assets/images/xplainPage/Xplain_Graphic Patterns-01_Transparent.svg";
import FooterForm from "./FooterForm";
import {
  LandingPageContainer,
  ComingSoonText,
  Logo,
  Title,
  Paragraph,
  BackgroundImageContainer,
  NoView,
} from "./Xplain.styled";

const Xplain: React.FC = () => {
  const bgColor = "#ffffff";
  const btnColor = "#302353";

  return (
    <NoView>
      <LandingPageContainer>
        <BackgroundImageContainer>
          <img src={BackgroundImage} alt="Xplain theme" />
        </BackgroundImageContainer>
        <ComingSoonText>Coming soon...</ComingSoonText>
        <Logo src={XplainLogo} alt="Xplain logo" />
        <Title>Dedicated to derivatives</Title>
        <Paragraph>
          Sign up to be the first to know when we launch our new website:
        </Paragraph>
        <FooterForm bgColor={bgColor} btnColor={btnColor} />
      </LandingPageContainer>
    </NoView>
  );
};

export default Xplain;
