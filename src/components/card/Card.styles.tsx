import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)`
  border: 1px solid #dedede;
  border-radius: 10px;
  min-height: 134px;
  overflow: hidden;
  display: flex;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const CardTitleText = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const CardDescText = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: #5f6367;
`;
