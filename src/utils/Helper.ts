import { format } from "date-fns";
import type { IDictionaries } from "../core/HttpResponse";
import type { IItineraries } from "../api/flight_offers/flightOffers.type";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timer: NodeJS.Timeout | null;

  return (...args: Parameters<F>) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func(...args);
      timer = null;
    }, delay);
  };
};

export const parseISOTime = (date: string) => {
  const formatted = format(new Date(date), "HH:mm");
  return formatted;
};

export const parseISODuration = (iso: string) => {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  const hours = match?.[1] ? parseInt(match[1]) : 0;
  const minutes = match?.[2] ? parseInt(match[2]) : 0;
  return { hours, minutes };
};

export const getDurationFromItineraries = (data: IItineraries[]) => {
  let hours = 0;
  let minutes = 0;

  data.forEach((item) => {
    const parsed = parseISODuration(item.duration);
    hours += parsed.hours;
    minutes += parsed.minutes;
  });

  hours += Math.floor(minutes / 60);
  minutes = minutes % 60;

  return {
    formatted: `${hours}h ${minutes}m`,
  };
};

export const getTotalStops = (data: IItineraries[]) => {
  const stop = data.reduce((acc, item) => {
    return acc + item.segments.length;
  }, 0);
  return stop - 1;
};

export const getAirline = (code: string, dictionaries?: IDictionaries) => {
  let airline = "";
  if (dictionaries) {
    airline = dictionaries.carriers[code];
  }

  return airline;
};

export const getAircraft = (code: string, dictionaries?: IDictionaries) => {
  let airline = "";
  if (dictionaries) {
    airline = dictionaries.aircraft[code];
  }

  return airline;
};
