import { ContactContainer, Title, Description } from "./Contact.styled";
import { contactData, buttonText } from "./data";
import ButtonComponent from "../../../common/Button";

const Contact = () => {
  return (
    <ContactContainer>
      <Title>{contactData.title}</Title>
      <Description>{contactData.description}</Description>
      <ButtonComponent text={buttonText} to="/contact" />
    </ContactContainer>
  );
};

export default Contact;
