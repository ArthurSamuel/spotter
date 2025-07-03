import { Typography } from "@mui/material";
import type React from "react";
import { Container } from "./Tag.styles";

interface TagProps {
  active?: boolean;
  label: string;
  icon?: React.ReactElement;
  onClick(): void;
}

export default function Tag({ label, active, icon, onClick }: TagProps) {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <Container
      bgcolor={active ? "#e0eafd" : "transparent"}
      onClick={handleOnClick}
    >
      {icon && icon}
      <Typography
        variant="subtitle2"
        fontWeight={500}
        color={active ? "primary" : "textPrimary"}
      >
        {label}
      </Typography>
    </Container>
  );
}
