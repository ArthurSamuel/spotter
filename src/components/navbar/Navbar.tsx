import { Box } from "@mui/material";
import { Haeader, Wrapper } from "./Navbar.styles";
import LuggageIcon from "@mui/icons-material/Luggage";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FlightIcon from "@mui/icons-material/Flight";
import Tag from "../tag/Tag";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const navbarMenus = [
    {
      label: "Travel",
      icon: <LuggageIcon style={{ color: "#1967d2", fontSize: 15 }} />,
      path: "/travel",
    },
    {
      label: "Explore",
      icon: <TravelExploreIcon style={{ color: "#1967d2", fontSize: 15 }} />,
      path: "/explore",
    },
    {
      label: "Flight",
      icon: <FlightIcon style={{ color: "#1967d2", fontSize: 15 }} />,
      path: "/flight",
    },
  ];

  const handleOnTagClick = (index: number, path: string) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <Box>
      <Haeader>
        <Box display={"flex"} alignItems={"center"}>
          <Wrapper>
            {navbarMenus.map((item, index) => (
              <Tag
                key={index}
                active={index === activeIndex}
                label={item.label}
                icon={item.icon}
                onClick={() => handleOnTagClick(index, item.path)}
              />
            ))}
          </Wrapper>
        </Box>
      </Haeader>
    </Box>
  );
}
