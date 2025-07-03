import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ActivityIcon = styled(Box)`
  padding: 10px;
  width: 75px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }
`;
