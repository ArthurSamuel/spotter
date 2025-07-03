import Http from "../../core/Http";
import type { HttpMetaResponse } from "../../core/HttpResponse";
import type { IFlightOffers } from "./flightOffers.type";

export const getFlightOffers = async ({
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
  const res = await Http.get<HttpMetaResponse<IFlightOffers[]>>({
    url: "https://test.api.amadeus.com/v2/shopping/flight-offers",
    params: {
      adults,
      departureDate,
      destinationLocationCode,
      originLocationCode,
      max: max || 5,
      returnDate,
    },
  });
  return res;
};
