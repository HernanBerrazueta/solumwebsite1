import styled from "styled-components";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import theme from "../../../theme";
import { device } from "../../../utils/device";

export const policies = [
  { title: "Privacy Policy", to: "/privacy_policy" },
  { title: "Data Protection Policy", to: "/data_protection" },
  { title: "Cookies Policy", to: "/cookies" },
  { title: "ESG Commitment", to: "/esg_commitment" },
  { title: "Diversity and Inclusion", to: "/diversity_inclusion" },
];
export const office =
  "Solum Financial Limited is a limited liability company registered in England and Wales with registered number: 9050223 and Registered office: at 43-45 Dorset Street, 2F, London, W1U 7NA.";

export const copyright =
  "Copyright \u00A9 2024 Solum Financial Limited | All Rights Reserved.";

export const CopyrightWrapper = styled(Grid)`
  background-color: ${theme.palette.primary.main};
  height: 50px;
  color: ${theme.palette.text.primary};
  font-size: 14px;
  justify-content: space-around;
  align-items: center;

  @media ${device.mobileOnly} {
    height: 100%;
    margin-top: 30px;
  }
`;

export const PoliciesWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: left;
  flex-wrap: wrap;
  gap: 15px 25px;

  @media ${device.mobileOnly} {
  }

  @media ${device.smallTablet} {
    padding: 20px 0;
  }
`;

export const PolicyLink = styled(Link)`
  font-family: "CircularXXWeb-Medium", sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  display: flex;
  justify-content: center;
  text-align: left;
  flex-wrap: wrap;

  &:hover {
    text-decoration: underline;
  }

  @media ${device.mobileOnly} {
    // display: block;
    min-width: 240px;
    text-align: left;
    padding: 0 20px;
  }

  @media ${device.smallTablet} {
    min-width: 0;
  }
`;

export const IconsGrid = styled(Grid)`
  margin-top: 20px;
  justify-content: center;
  gap: 10px;

  @media ${device.mobileOnly} {
    margin-top: 0;
    padding: 20px 0;
  }
`;

export const SpanWrapper = styled.div`
  display: inline-block;
  padding: 0 20px;
`;
