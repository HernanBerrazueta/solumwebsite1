import React from "react";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { BackDrop, Card, CloseBtn } from "./Modal.styled";
import ModalCardContent from "./ModalCardContent";

interface TeamData {
  image: string;
  name: string;
  position: string;
  description: string;
  phone: string;
  email: string;
  linkedIn: string;
}

const ModalWindow: React.FC<{
  open: boolean;
  onClose: () => void;
  teamMember: TeamData;
}> = ({ open, onClose, teamMember }) => {
  const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <BackDrop onClick={onClose}>
      <Card open={open} onClick={stopPropagation}>
        <CloseBtn onClick={onClose}>
          <CloseSharpIcon fontSize="large" />
        </CloseBtn>
        <ModalCardContent teamMember={teamMember} />
      </Card>
    </BackDrop>
  );
};

export default ModalWindow;
