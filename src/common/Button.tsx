import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ButtonContainer } from "../components/homepage/insights/Insights.styled";
import { ButtonText } from "../components/about/team/Team.styled";

interface ButtonProps {
  text: string;
  to: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text, to }) => {
  const location = useLocation();
  const isInsightsPublicationsPage =
    location.pathname === "/insights/publications";

  return (
    <ButtonContainer
      style={{ marginBottom: isInsightsPublicationsPage ? 0 : undefined }}
    >
      <Link to={to}>
        <Button variant="contained" color="primary">
          <ButtonText>{text}</ButtonText>
        </Button>
      </Link>
    </ButtonContainer>
  );
};

export default ButtonComponent;
