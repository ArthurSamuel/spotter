import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { ButtonSearchContainer, Wrapper } from "./Search.styles";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import TicketPersonalSearch from "../../../../feature/search/Search";

export default function Search() {
  const navigate = useNavigate();
  const [seat, setSeat] = useState(1);
  const [trip, setTrip] = useState(1);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [startDate, setStartDate] = useState(new Date().toISOString());
  const [endDate, setEndDate] = useState("");

  const handleOnSearch = () => {
    navigate(
      `/flight/search?departure=${departure}&arrival=${arrival}&startDate=${startDate}&endDate=${endDate}&seat=${seat}&trip=${trip}`
    );
  };

  return (
    <Box>
      <img src="/flight.svg" />
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Typography fontWeight={"500"} variant="h3">
          Flights
        </Typography>
        <Wrapper
          p={2}
          mt={4}
          width={"100%"}
          borderRadius={2}
          paddingBottom={6}
          position={"relative"}
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
        >
          <TicketPersonalSearch
            tripValue={trip}
            onSeatChange={(e) => setSeat(e)}
            onTripChange={(e) => setTrip(e)}
            onEndDateChange={(e) => setEndDate(e)}
            onStartDateChange={(e) => setStartDate(e)}
            onArrivalChange={(e) => setArrival(e)}
            onDepartueChange={(e) => setDeparture(e)}
          />
          <ButtonSearchContainer onClick={handleOnSearch}>
            <SearchIcon style={{ fontSize: 20 }} />
            Search
          </ButtonSearchContainer>
        </Wrapper>
      </Box>
    </Box>
  );
}
