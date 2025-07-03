import styled from "@emotion/styled";
import { Box, Link } from "@mui/material";

export const Wrapper = styled(Box)`
  padding-bottom: 20px;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 0px;
  }
`;

export const LinkText = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
