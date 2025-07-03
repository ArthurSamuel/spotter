import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Haeader = styled.header`
  height: 65px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  position: fixed;
  top: 0%;
  width: 100%;
  z-index: 9999;
  background-color: white;
`;

export const Wrapper = styled(Box)`
  display: flex;
  gap: 10px;
`;
