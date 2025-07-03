import { Box } from "@mui/material";
import { Container, Image } from "./Card.styles";
import type React from "react";

interface CardWithImageProps {
  imageUrl: string;
  children: React.ReactElement;
  onClick(): void;
}

export const CardWithImage = ({
  children,
  imageUrl,
  onClick,
}: CardWithImageProps) => {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <Container onClick={handleOnClick}>
      <Box bgcolor={"red"} width={"50%"}>
        <Image src={imageUrl} />
      </Box>
      <Box width={"100%"}>{children}</Box>
    </Container>
  );
};
