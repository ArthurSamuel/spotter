import { Box, styled } from "@mui/material";

export const ButtonSearchContainer = styled(Box)`
  position: absolute;
  width: 100px;
  height: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: -25%;
  background-color: #1e65c8;
  color: white;
  cursor: pointer;
  gap: 7px;

  &:hover {
    background-color: #1b5ab3;
  }

  @media screen and (max-width: 840px) {
    bottom: -15%;
  }
`;

export const Wrapper = styled(Box)`
  @media screen and (max-width: 840px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;
