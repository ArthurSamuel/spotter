/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Menu } from "@mui/material";
import {
  DateCalendar,
  LocalizationProvider,
  PickersDay,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  isWithinInterval,
  startOfDay,
  isBefore,
  format,
  parseISO,
} from "date-fns";
import {
  Container,
  Wrapper,
  WrapperMobileCallendar,
  WrapperSingle,
} from "./Date.styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useEffect, useState } from "react";

interface DatePickerProps {
  isRange?: boolean;
  startDateValue: string;
  endDateValue?: string;
  onStartDateChange(date: string): void;
  onEndDateChange(date: string): void;
}

const DatePicker = ({
  isRange,
  startDateValue,
  endDateValue,
  onEndDateChange,
  onStartDateChange,
}: DatePickerProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [startDate, setStartDate] = useState<string>(new Date().toISOString());
  const [endDate, setEndDate] = useState<string>();
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (startDateValue) {
      setStartDate(startDateValue);
    }
    if (endDateValue) {
      setEndDate(endDateValue);
    }
  }, [startDateValue, endDateValue]);

  const handleOnStartDateChange = (value: string) => {
    const start = new Date(value);
    if (!endDate || isBefore(endDate, start)) {
      setEndDate(value);
    }
    onStartDateChange(value);
    setStartDate(value);
    if (!isRange) {
      setAnchorEl(null);
    }
  };

  const handleOnEndDateChange = (value: string) => {
    setEndDate(value);
    onEndDateChange(value);
    setAnchorEl(null);
  };

  const markDate = (props: any) => {
    const { day, outsideCurrentMonth, ...other } = props;
    const start = startOfDay(new Date(startDate));
    const end = startOfDay(new Date(endDate || startDate));
    const isInRange = isWithinInterval(day, { start, end });

    return (
      <PickersDay
        {...other}
        day={day}
        outsideCurrentMonth={outsideCurrentMonth}
        sx={{
          backgroundColor: isInRange ? "#1976d2" : undefined,
          color: isInRange ? "white" : undefined,
          borderRadius: isInRange ? 7 : undefined,
          "&:hover": {
            backgroundColor: isInRange ? "#1565c0" : undefined,
          },
        }}
      />
    );
  };

  const formatDate = (value: string) => {
    const date = parseISO(value);
    const formatted = format(date, "EEE d MMM");
    return formatted;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box>
        {isRange ? (
          <Container onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Wrapper display={"flex"} alignItems={"center"} gap={1}>
              <CalendarMonthIcon />
              {formatDate(startDate)}
            </Wrapper>
            <Wrapper>{endDate ? formatDate(endDate) : "Returned Date"}</Wrapper>
          </Container>
        ) : (
          <WrapperSingle gap={1} onClick={(e) => setAnchorEl(e.currentTarget)}>
            <CalendarMonthIcon />
            {formatDate(startDate)}
          </WrapperSingle>
        )}
        <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
          <WrapperMobileCallendar display={"flex"}>
            <DateCalendar
              minDate={new Date()}
              onChange={(e) => e && handleOnStartDateChange(e.toISOString())}
              slots={{
                day: markDate,
              }}
            />
            {isRange && (
              <DateCalendar
                key={startDate || "endDateDefault"}
                minDate={startDate ? new Date(startDate) : new Date()}
                onChange={(e) => e && handleOnEndDateChange(e.toISOString())}
                defaultValue={endDate ? new Date(endDate) : new Date()}
                slots={{
                  day: markDate,
                }}
              />
            )}
          </WrapperMobileCallendar>
        </Menu>
      </Box>
    </LocalizationProvider>
  );
};

export default DatePicker;
