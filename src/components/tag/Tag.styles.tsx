import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  gap: 7px;
  border-radius: 20px;
  border: 1px solid #dedede;
  padding: 8px 16px 8px 16px;
  height: 20px;
  cursor: pointer;

  &:hover {
    background-color: #e8eef9;
  }
`;
