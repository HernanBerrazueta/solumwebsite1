import React from "react";
import {
  CardContactDetails,
  CardContentWrapper,
  CardImage,
  CardName,
  CardPersonalData,
  CardPersonalDataColumns,
  CardPersonalDataWrapper,
  CardPersonalDescription,
  CardPersonalLinkedIn,
  CardPersonalLinks,
  CardPosition,
} from "./Modal.styled";
import MdPhone from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import linkedIn from "../../../../assets/logos/linkedin.svg";

interface TeamData {
  image: string;
  name: string;
  position: string;
  description: string;
  phone: string;
  email: string;
  linkedIn: string;
}

const ModalCardContent: React.FC<{
  teamMember: TeamData;
}> = ({ teamMember }) => {
  return (
    <>
      <CardImage src={teamMember.image} alt={teamMember.name} />
      <CardContentWrapper>
        <CardPersonalDataWrapper>
          <CardPersonalDataColumns>
            <CardName>
              <b>{teamMember.name}</b>
            </CardName>
            <CardPosition>{teamMember.position}</CardPosition>
          </CardPersonalDataColumns>
          <CardPersonalData>
            <CardPersonalLinks as="a" href="tel:+447 (0) 207869230">
              <CardContactDetails>{teamMember.phone}</CardContactDetails>
              <MdPhone fontSize="small" />
            </CardPersonalLinks>
            <CardPersonalLinks
              as="a"
              href="mailto:email@example.com"
              target="_blank"
            >
              <CardContactDetails>{teamMember.email}</CardContactDetails>
              <MailOutlineIcon fontSize="small" />
            </CardPersonalLinks>
            <CardPersonalLinkedIn
              as="a"
              href={teamMember.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardContactDetails>{teamMember.name}</CardContactDetails>
              <img src={linkedIn} alt="LinkedIn" />
            </CardPersonalLinkedIn>
          </CardPersonalData>
        </CardPersonalDataWrapper>
        <CardPersonalDescription>
          {teamMember.description}
        </CardPersonalDescription>
      </CardContentWrapper>
    </>
  );
};

export default ModalCardContent;
