import React from "react";
import {
  CopyrightWrapper,
  PoliciesWrapper,
  policies,
  PolicyLink,
} from "./Copyright.styled";

const Policies: React.FC = () => {
  return (
    <>
      <CopyrightWrapper container>
        <PoliciesWrapper>
          {policies.map(({ title, to }) => (
            <PolicyLink key={title} to={to}>
              <span>{title}</span>
            </PolicyLink>
          ))}
        </PoliciesWrapper>
      </CopyrightWrapper>
    </>
  );
};

export default Policies;
