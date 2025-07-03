import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const IconRoundTrip = styled.div`
  rotate: 90deg;
  margin-right: 5px;
`;

export const ButtonAction = styled.button`
  background-color: #e0ebfe;
  width: 30px;
  height: 30px;
  border: 0px;
  color: #164ea6;
  border-radius: 5px;
  z-index: 9999;
  cursor: pointer;
`;

export const Wrapper = styled(Box)`
  @media screen and (max-width: 840px) {
    flex-direction: column;
    padding-left: 13px;
    padding-right: 13px;
  }
`;

export const WrapperInput = styled(Box)`
  @media screen and (max-width: 840px) {
    flex-direction: column;
  }
`;
