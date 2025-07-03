import { Box, Button, Typography } from "@mui/material";
import { InputAutoComplete, InputSelect } from "../../components/input/Input";
import {
  ButtonAction,
  IconRoundTrip,
  Wrapper,
  WrapperInput,
} from "./Search.styles";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useEffect, useState } from "react";
import MenuDialog from "../../components/menu/Menu";
import DatePicker from "../../components/date/Date";
import { useGetAirports } from "../../api/airports/resolver";
import { debounce } from "../../utils/Helper";

interface IAirportOption {
  name: string;
  value: string;
}

interface TicketPersonalSearchProps {
  seatValue?: number;
  arrivalValue?: string;
  departureValue?: string;
  startDateValue?: string;
  endDateValue?: string;
  tripValue?: number;
  onTripChange?(trip: number): void;
  onFlightClassChange?(flight: number): void;
  onSeatChange?(seat: number): void;
  onArrivalChange?(code: string): void;
  onDepartueChange?(code: string): void;
  onStartDateChange?(date: string): void;
  onEndDateChange?(date: string): void;
}

export default function TicketPersonalSearch({
  seatValue,
  arrivalValue,
  tripValue,
  departureValue,
  endDateValue,
  startDateValue,
  onFlightClassChange,
  onSeatChange,
  onTripChange,
  onArrivalChange,
  onDepartueChange,
  onEndDateChange,
  onStartDateChange,
}: TicketPersonalSearchProps) {
  const [roundTrip, setRoundTrip] = useState(0);
  const [flightClass, setFlightClass] = useState(0);
  const [citySearch, setCitySearch] = useState<string>("");
  const [seat, setSeat] = useState(1);
  const [airportOptions, setAirportOptions] = useState<IAirportOption[]>([]);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { data: dataRawAirports } = useGetAirports(citySearch);
  const dataAirports = dataRawAirports?.data;

  useEffect(() => {
    if (dataAirports) {
      const temp: IAirportOption[] = [];
      dataAirports.forEach((item) => {
        temp.push({
          name: item.name,
          value: item.iata,
        });
      });
      setAirportOptions(temp);
    }
  }, [dataAirports]);

  const roundTripData = [
    { name: "Round Trip", value: 1 },
    { name: "One-Way", value: 2 },
  ];
  const flightClassData = [
    { name: "Economy", value: 1 },
    { name: "Premium economy", value: 2 },
    { name: "Business", value: 3 },
    { name: "First", value: 2 },
  ];

  useEffect(() => {
    if (seatValue) {
      setSeat(seatValue);
    }
    if (arrivalValue) {
      setArrival(arrivalValue);
    }
    if (departureValue) {
      setDeparture(departureValue);
    }
    if (startDateValue) {
      setStartDate(startDateValue);
    }
    if (endDateValue) {
      setEndDate(endDateValue);
    }
    if (tripValue) {
      setRoundTrip(tripValue);
    }
  }, [
    arrivalValue,
    departureValue,
    endDateValue,
    seatValue,
    startDateValue,
    tripValue,
  ]);

  const handleOnFlightClassChange = (value: number) => {
    setFlightClass(value);
    if (onFlightClassChange) onFlightClassChange(value);
  };

  const handleOnSeatChange = (value: number) => {
    const temp = seat + value;
    setSeat(temp < 0 ? 0 : temp);
    if (onSeatChange) onSeatChange(temp);
  };

  const handleOnTripChange = (value: number) => {
    setRoundTrip(value);
    if (onTripChange) onTripChange(value);
  };

  const handleOnStartDateChange = (date: string) => {
    setStartDate(date);
    if (onStartDateChange) onStartDateChange(date);
  };

  const handleOnEndDateChange = (date: string) => {
    setEndDate(date);
    if (onEndDateChange) onEndDateChange(date);
  };

  const handleOnChangeDeparture = (value: string) => {
    setDeparture(value);
    if (onDepartueChange) onDepartueChange(value);
  };

  const handleOnChangeArrival = (value: string) => {
    setArrival(value);
    if (onArrivalChange) onArrivalChange(value);
  };

  const handleOnChangeAutoComplete = debounce((value: string) => {
    setCitySearch(value);
  }, 250);

  return (
    <Box>
      <Box display={"flex"}>
        <InputSelect
          value={roundTrip}
          options={roundTripData}
          onChange={(v) => handleOnTripChange(v)}
          icon={
            <IconRoundTrip>
              <ImportExportIcon style={{ fontSize: 18 }} />
            </IconRoundTrip>
          }
        />
        <MenuDialog
          value={seat}
          icon={<PersonOutlineIcon style={{ fontSize: 18 }} />}
        >
          <Box p={1} display={"flex"} flexDirection={"column"} gap={2}>
            <Box
              display={"flex"}
              alignItems={"center"}
              width={190}
              justifyContent={"space-between"}
            >
              <Typography>Adults</Typography>
              <Box display={"flex"} gap={1.5} alignItems={"center"}>
                <ButtonAction onClick={() => handleOnSeatChange(-1)}>
                  -
                </ButtonAction>
                <Typography>{seat}</Typography>
                <ButtonAction onClick={() => handleOnSeatChange(1)}>
                  +
                </ButtonAction>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"} mt={2} gap={2}>
              <Button variant="text">
                <Typography variant="caption" fontWeight={600}>
                  Cancel
                </Typography>
              </Button>
              <Button variant="text">
                <Typography variant="caption" fontWeight={600}>
                  Done
                </Typography>
              </Button>
            </Box>
          </Box>
        </MenuDialog>
        <InputSelect
          value={flightClass}
          options={flightClassData}
          onChange={(v) => handleOnFlightClassChange(v)}
        />
      </Box>
      <Wrapper display={"flex"} gap={1}>
        <WrapperInput flex={1} display={"flex"} gap={1}>
          <InputAutoComplete
            onChange={(e) => handleOnChangeAutoComplete(e)}
            options={airportOptions}
            placeholder="Where From ?"
            onClick={(e) => handleOnChangeDeparture(e.value)}
            inputValue={departure}
          />
          <InputAutoComplete
            onChange={(e) => handleOnChangeAutoComplete(e)}
            options={airportOptions}
            placeholder="Where To ?"
            onClick={(e) => handleOnChangeArrival(e.value)}
            inputValue={arrival}
          />
        </WrapperInput>
        <Box flex={1} width={"100%"} justifyContent={"flex-start"}>
          <DatePicker
            isRange={roundTrip === 1}
            startDateValue={startDate}
            endDateValue={endDate}
            onEndDateChange={(e) => handleOnEndDateChange(e)}
            onStartDateChange={(e) => handleOnStartDateChange(e)}
          />
        </Box>
      </Wrapper>
    </Box>
  );
}
