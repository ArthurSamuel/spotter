import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { WrapperLayout } from "../../layouts/Layout.styles";
import TicketResults from "./feature/ticket_results/TicketResults";
import { useLocation } from "react-router";
import { SearchFlightQuery } from "../../constants/Constants";
import Search from "./feature/search/Search";
import { useGetFlightOffers } from "../../api/flight_offers/resolver";

export default function FlightSearchPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const departure = query.get(SearchFlightQuery.departure) || undefined;
  const arrival = query.get(SearchFlightQuery.arrival) || undefined;
  const startDate = query.get(SearchFlightQuery.startDate) || undefined;
  const endDate = query.get(SearchFlightQuery.endDate) || undefined;
  const seat = query.get(SearchFlightQuery.seat) || undefined;
  const trip = query.get(SearchFlightQuery.trip) || undefined;

  const {
    data: dataRawFlightOffers,
    isLoading,
    isError,
  } = useGetFlightOffers({
    adults: seat,
    departureDate: startDate ? startDate.slice(0, 10) : "",
    destinationLocationCode: arrival,
    originLocationCode: departure,
    returnDate: endDate ? endDate.slice(0, 10) : "",
  });
  const dataFlightOffers = dataRawFlightOffers?.data.data;
  const dataFlightDictionaries = dataRawFlightOffers?.data.dictionaries;

  const handleOnRefresh = () => {
    window.location.reload();
  };

  return (
    <WrapperLayout>
      <Box mt={4}>
        <Search
          seat={seat}
          arrival={arrival}
          departure={departure}
          startDate={startDate}
          endDate={endDate}
          trip={trip}
        />
      </Box>
      <Box mt={4}>
        {isError && (
          <Box
            gap={2}
            flexDirection={"column"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="caption">
              Sorry we couldn't resolve your search please try again
            </Typography>
            <Button variant="outlined" onClick={handleOnRefresh}>
              Refresh
            </Button>
          </Box>
        )}
        {isLoading ? (
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <CircularProgress />
          </Box>
        ) : (
          <TicketResults
            data={dataFlightOffers}
            dictionaries={dataFlightDictionaries}
            arrivalCode={arrival}
            departureCode={departure}
          />
        )}
      </Box>
    </WrapperLayout>
  );
}
