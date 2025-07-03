import { Box, Typography } from "@mui/material";
import {
  HideOnMobile,
  ImageAirlineLogo,
  ImageArrow,
  ShowOnMobile,
  SmallText,
  Wrapper,
} from "./TicketResults.styles";
import FlightInformation from "./FlightInformation";
import type {
  IFlightOffers,
  IItineraries,
} from "../../../../api/flight_offers/flightOffers.type";
import React from "react";
import {
  getAirline,
  getDurationFromItineraries,
  getTotalStops,
  parseISOTime,
} from "../../../../utils/Helper";
import type { IDictionaries } from "../../../../core/HttpResponse";

interface TicketResultsProps {
  data?: IFlightOffers[];
  dictionaries?: IDictionaries;
  departureCode?: string;
  arrivalCode?: string;
}

export default function TicketResults({
  data,
  dictionaries,
  arrivalCode,
  departureCode,
}: TicketResultsProps) {
  const getArrivalTime = (data: IItineraries[]) => {
    const lastItinerary = data[data.length - 1];
    const lastSegment =
      lastItinerary.segments[lastItinerary.segments.length - 1];
    return parseISOTime(lastSegment.arrival.at);
  };

  return (
    <React.Fragment>
      {data?.map((item, index) => {
        const priceText = `${item.price.currency} ${item.price.grandTotal}`;
        const duration = getDurationFromItineraries(item.itineraries);
        const departureTime = parseISOTime(
          item.itineraries[0].segments[0].departure.at
        );
        const arrivalTime = getArrivalTime(item.itineraries);
        const nonStopText = `${getTotalStops(item.itineraries)}-Stop`;
        const firstAirLine = getAirline(
          item.itineraries[0].segments[0].operating.carrierCode,
          dictionaries
        );

        return (
          <Wrapper key={index} mb={3}>
            <Box>
              <HideOnMobile>
                <Box
                  p={"10px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Box width={50} mr={3}>
                      <ImageAirlineLogo src="/airline_logo.png" />
                    </Box>
                    <Box>
                      <Typography variant="body1" fontWeight={"bold"}>
                        {departureTime} - {arrivalTime}
                      </Typography>
                      <SmallText>{firstAirLine}</SmallText>
                    </Box>
                  </Box>
                  <Box display={"flex"} gap={4}>
                    <Box>
                      <Typography variant="body1">
                        {duration.formatted}
                      </Typography>
                      <SmallText>
                        {departureCode}-{arrivalCode}
                      </SmallText>
                    </Box>
                    <Box>{nonStopText}</Box>
                  </Box>
                  <Box display={"flex"} justifyContent={"flex-end"} gap={4}>
                    <Box>
                      <Typography fontWeight={"bold"}>{priceText}</Typography>
                    </Box>
                  </Box>
                </Box>
                <FlightInformation
                  data={item.itineraries}
                  dictionaries={dictionaries}
                />
              </HideOnMobile>
              <ShowOnMobile>
                <Box
                  p={"10px"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1}
                >
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box display={"flex"} gap={1}>
                      <Box>
                        <Typography
                          variant="body1"
                          fontWeight={"bold"}
                          m={0}
                          p={0}
                        >
                          {departureTime}
                        </Typography>
                        <SmallText>{departureCode}</SmallText>
                      </Box>
                      <ImageArrow />
                      <Box>
                        <Typography variant="body1" fontWeight={"bold"}>
                          {arrivalTime}
                        </Typography>
                        <SmallText>{arrivalCode}</SmallText>
                      </Box>
                    </Box>
                    <Box display={"flex"}>
                      <Typography fontWeight={"bold"}>{priceText}</Typography>
                    </Box>
                  </Box>
                  <Box display={"flex"}>
                    <Box width={50} mr={2}>
                      <ImageAirlineLogo src="/airline_logo.png" />
                    </Box>
                    <Box flexDirection={"column"} display={"flex"} mt={1}>
                      <SmallText>
                        {nonStopText} {"\u2022"} 1 hr 50 min
                      </SmallText>
                      <SmallText>{firstAirLine}</SmallText>
                    </Box>
                  </Box>
                  <FlightInformation
                    data={item.itineraries}
                    dictionaries={dictionaries}
                  />
                </Box>
              </ShowOnMobile>
            </Box>
          </Wrapper>
        );
      })}
    </React.Fragment>
  );
}
