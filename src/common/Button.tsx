import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ButtonContainer } from "../components/homepage/insights/Insights.styled";
import { ButtonText } from "../components/about/team/Team.styled";

interface ButtonProps {
  text: string;
  to: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, to }) => {
  return (
    <ButtonContainer>
      <Link to={to}>
        <Button variant="contained" color="primary">
          <ButtonText>{text}</ButtonText>
        </Button>
      </Link>
    </ButtonContainer>
  );
};

export default ButtonComponent;
