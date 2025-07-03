import { Box, Typography } from "@mui/material";
import LuggageIcon from "@mui/icons-material/Luggage";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import { ActivityIcon } from "./Search.styles";
import { InputRounded } from "../../../../components/input/Input";
import { useNavigate } from "react-router";

export default function Search() {
  const navigate = useNavigate();

  const navbarMenus = [
    {
      label: "Travel",
      icon: <LuggageIcon style={{ color: "#5f6367" }} />,
      path: "/travel",
    },
    {
      label: "Explore",
      icon: <TravelExploreIcon style={{ color: "#5f6367" }} />,
      path: "/explore",
    },
    {
      label: "Flight",
      icon: <FlightIcon style={{ color: "#5f6367" }} />,
      path: "/flight",
    },
    {
      label: "Hotels",
      icon: <HotelIcon style={{ color: "#5f6367" }} />,
      path: "/flight",
    },
  ];

  const handleOnClick = (path: string) => {
    navigate(path);
  };

  return (
    <Box position={"relative"}>
      <img alt="travel-illustration.svg" src="travel.svg" />
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        position={"absolute"}
        top={"75%"}
        left={"0%"}
        width={"100%"}
      >
        <Typography fontWeight={"500"} variant="h3">
          Travel
        </Typography>
        <Box mt={2}>
          <InputRounded />
        </Box>
        <Box
          mt={3}
          display={"flex"}
          justifyContent={"space-between"}
          width={300}
        >
          {navbarMenus.map((item, index) => (
            <ActivityIcon key={index} onClick={() => handleOnClick(item.path)}>
              <Box>{item.icon}</Box>
              <Typography variant="caption">{item.label}</Typography>
            </ActivityIcon>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
