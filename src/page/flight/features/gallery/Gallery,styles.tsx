import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const GalleryImage = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
`;

export const WrapperImage = styled(Box)`
  height: 100px;

  @media screen and (max-width: 890px) {
    height: 30vw;
    max-height: 300px;
    min-height: 170px;
  }
`;
