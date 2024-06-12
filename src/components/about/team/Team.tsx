import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { team } from "./data";
import {
  BackgroundContainer,
  BoxImage,
  BoxItem,
  TeamGrid,
  TeamMemberName,
  TeamMemberPosition,
  TeamMemberTitle,
} from "./Team.styled";
import ModalWindow from "./modal/Modal";
import { buttonText } from "../../homepage/contact/data";
import ButtonComponent from "../../../common/Button";
import useMatchMedia from "../../../hooks/useMediaQuery";

interface TeamData {
  image: string;
  name: string;
  position: string;
  description: string;
  phone: string;
  email: string;
  linkedIn: string;
}

const TeamComponent: React.FC = () => {
  const { isMobile } = useMatchMedia();

  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamData | null>(
    null
  );

  useEffect(() => {
    const body = document.body;
    if (selectedTeamMember) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [selectedTeamMember]);

  const handleOpenModal = (teamMember: TeamData) => {
    setSelectedTeamMember(teamMember);
  };

  const handleCloseModal = () => {
    setSelectedTeamMember(null);
  };

  return (
    <BackgroundContainer container>
      <TeamMemberTitle>Meet the Senior Team</TeamMemberTitle>
      <TeamGrid container>
        {team.map((item) => (
          <BoxItem
            item
            xs={isMobile ? 12 : 3}
            key={item.name}
            onClick={() => handleOpenModal(item)}
          >
            <BoxImage
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></BoxImage>
            <TeamMemberName>{item.name}</TeamMemberName>
            <TeamMemberPosition>{item.position}</TeamMemberPosition>
          </BoxItem>
        ))}
      </TeamGrid>
      <ButtonComponent text={buttonText} to="/contact" />
      {selectedTeamMember && (
        <ModalWindow
          open={selectedTeamMember !== null}
          onClose={handleCloseModal}
          teamMember={selectedTeamMember}
        />
      )}
    </BackgroundContainer>
  );
};

export default TeamComponent;
