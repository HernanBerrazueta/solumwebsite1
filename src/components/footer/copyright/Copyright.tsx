import React from "react";
import { SpanWrapper, office, copyright } from "./Copyright.styled";
import Icons from "./Icons";
import Policies from "./Policies";
import useMatchMedia from "../../../hooks/useMediaQuery";

const Copyright: React.FC = () => {
  const { isMobile } = useMatchMedia();

  return (
    <>
      <SpanWrapper>
        <span>{office}</span>
      </SpanWrapper>
      {isMobile ? (
        <>
          <Policies />
          <Icons />
        </>
      ) : (
        <>
          <Icons />
          <Policies />
        </>
      )}
      <SpanWrapper>
        <span>{copyright}</span>
      </SpanWrapper>
    </>
  );
};

export default Copyright;
