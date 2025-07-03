import { Box, styled } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  width: 100%;
  height: calc(100vh - 65px);
`;

export const LeftSide = styled(Box)`
  min-width: 400px;

  @media screen and (max-width: 840px) {
    min-width: 100%;
    margin-top: 10px;
  }
`;

export const RightSide = styled(Box)`
  width: 100%;
`;
