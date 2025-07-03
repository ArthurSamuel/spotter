import { useQuery } from "@tanstack/react-query";
import { getFlightOffers } from "./service";

export const useGetFlightOffers = ({
  adults,
  departureDate,
  destinationLocationCode,
  originLocationCode,
  max,
  returnDate,
}: {
  originLocationCode?: string;
  destinationLocationCode?: string;
  departureDate?: string;
  returnDate?: string;
  adults?: string;
  max?: number;
}) => {
  return useQuery({
    queryKey: [
      "flight-offers",
      adults,
      departureDate,
      destinationLocationCode,
      originLocationCode,
      max,
      returnDate,
    ],
    queryFn: () =>
      getFlightOffers({
        adults,
        departureDate,
        destinationLocationCode,
        originLocationCode,
        max,
        returnDate,
      }),
  });
};
