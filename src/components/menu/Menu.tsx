/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Menu } from "@mui/material";
import React, { useState } from "react";
import { ButtonSelectContainer } from "../input/Input.styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface MenuDialogProps {
  icon?: React.ReactElement;
  value: any;
  children: React.ReactElement | React.ReactElement[];
}

export default function MenuDialog({ icon, value, children }: MenuDialogProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box height={"50px"}>
      <ButtonSelectContainer onClick={(e) => handleClick(e)}>
        {icon && icon}
        {value}
        <ArrowDropDownIcon style={{ fontSize: 20 }} />
      </ButtonSelectContainer>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {children}
      </Menu>
    </Box>
  );
}
