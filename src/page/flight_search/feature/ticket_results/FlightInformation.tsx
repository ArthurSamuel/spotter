import { Box, Typography } from "@mui/material";
import {
  DotBig,
  DotSmall,
  FlightInformationWrapper,
} from "./TicketResults.styles";
import type { IItineraries } from "../../../../api/flight_offers/flightOffers.type";
import React from "react";
import {
  getAirline,
  parseISODuration,
  parseISOTime,
} from "../../../../utils/Helper";
import type { IDictionaries } from "../../../../core/HttpResponse";

interface FlightInformationProps {
  data?: IItineraries[];
  dictionaries?: IDictionaries;
}

export default function FlightInformation({
  data,
  dictionaries,
}: FlightInformationProps) {
  return (
    <Box>
      <Box width={"100%"} height={"1px"} bgcolor={"#dedede"} />
      {data?.map((item, index) => {
        {
          return item.segments.map((itemSegment, indexSegment) => {
            const departureAirport = itemSegment.departure.iataCode;
            const arrivalAirport = itemSegment.arrival.iataCode;
            const departureTime = parseISOTime(itemSegment.departure.at);
            const arrivalTime = parseISOTime(itemSegment.arrival.at);
            const durationTime = parseISODuration(itemSegment.duration);
            const airline = getAirline(itemSegment.carrierCode, dictionaries);
            const airCraft = itemSegment.aircraft.code;
            const terminal = itemSegment.arrival.terminal;

            return (
              <React.Fragment key={index + indexSegment}>
                <FlightInformationWrapper paddingTop={2}>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <DotBig />
                    <Typography fontWeight={500}>
                      {departureTime} {departureAirport}
                    </Typography>
                  </Box>
                  <Box display={"flex"} gap={1}>
                    <Box gap={1} display={"flex"} flexDirection={"column"}>
                      <Box
                        width={13}
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <DotSmall />
                      </Box>
                      <Box
                        width={13}
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <DotSmall />
                      </Box>
                      <Box
                        width={13}
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <DotSmall />
                      </Box>
                      <Box
                        width={13}
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <DotSmall />
                      </Box>
                      <Box
                        width={13}
                        display={"flex"}
                        justifyContent={"center"}
                      >
                        <DotSmall />
                      </Box>
                    </Box>
                    <Box alignItems={"center"} display={"flex"}>
                      <Typography
                        fontWeight={500}
                        variant="caption"
                        style={{ color: "gray" }}
                      >
                        Travel Time: {durationTime.hours} hr{" "}
                        {durationTime.minutes} min
                      </Typography>
                    </Box>
                  </Box>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <DotBig />
                    <Typography fontWeight={500}>
                      {arrivalTime} {arrivalAirport}
                    </Typography>
                  </Box>
                </FlightInformationWrapper>
                <FlightInformationWrapper
                  paddingBottom={2}
                  mt={2}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Typography
                    fontWeight={500}
                    variant="caption"
                    style={{ color: "gray" }}
                  >
                    {airline} {airCraft}
                  </Typography>
                  <Typography
                    fontWeight={500}
                    variant="caption"
                    style={{ color: "gray" }}
                  >
                    Terminal {terminal}
                  </Typography>
                </FlightInformationWrapper>
              </React.Fragment>
            );
          });
        }
      })}
    </Box>
  );
}
