import { Box } from "@mui/material";
import TicketPersonalSearch from "../../../../feature/search/Search";

interface SearchProps {
  seat?: string;
  departure?: string;
  arrival?: string;
  startDate?: string;
  endDate?: string;
  trip?: string;
}

export default function Search({
  seat,
  arrival,
  departure,
  startDate,
  endDate,
  trip,
}: SearchProps) {
  return (
    <Box>
      <TicketPersonalSearch
        startDateValue={startDate}
        endDateValue={endDate}
        seatValue={seat ? parseInt(seat) : 1}
        arrivalValue={arrival}
        departureValue={departure}
        tripValue={trip ? parseInt(trip) : 1}
      />
    </Box>
  );
}
