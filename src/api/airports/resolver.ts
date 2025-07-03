import { useQuery } from "@tanstack/react-query";
import { getAirports } from "./service";

export const useGetAirports = (city: string) => {
  return useQuery({
    enabled: city !== "",
    queryKey: ["airport", city],
    queryFn: () => getAirports(city),
  });
};
