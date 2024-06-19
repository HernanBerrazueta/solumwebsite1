import { ContactContainer, Title, Description } from "./Contact.styled";
import { contactData, buttonText } from "./data";
import ButtonComponent from "../../../common/Button";

const Contact = () => {
  return (
    <ContactContainer>
      <Title>{contactData.title}</Title>
      <div
        style={{
          paddingTop: 50,
          backgroundColor: "#fff",
        }}
      >
        <Description>{contactData.description}</Description>
      </div>
      <ButtonComponent text={buttonText} to="/contact" />
    </ContactContainer>
  );
};

export default Contact;
