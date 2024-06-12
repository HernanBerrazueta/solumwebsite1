import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Column, Container, Heading } from "./Squares.styled";
import { squareData } from "./data";

const Squares: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (to: string) => {
    if (to.startsWith("http")) {
      window.open(to, "_blank");
    } else {
      navigate(to);
    }
  };

  return (
    <Container>
      {squareData.map(({ to, title, paragraph }, index) => (
        <Column
          key={to}
          $isOdd={index % 2 === 0}
          // style={{ width: "calc(33vw - 70px)" }}
          onClick={() => handleClick(to)}
        >
          <Link
            to={to}
            style={{ color: "inherit" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Heading>{title}</Heading>
            <p>{paragraph}</p>
          </Link>
        </Column>
      ))}
    </Container>
  );
};

export default Squares;
