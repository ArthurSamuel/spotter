import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import { ContainerLayout } from "./Layout.styles";

export default function Layouts() {
  return (
    <Box>
      <Navbar />
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
    </Box>
  );
}
