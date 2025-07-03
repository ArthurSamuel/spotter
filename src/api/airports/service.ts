import Http from "../../core/Http";
import type { IAirports } from "./airports.type";

export const getAirports = async (city: string) => {
  const res = await Http.get<IAirports[]>({
    url: `https://test.arths.app/`,
    params: {
      name: city,
    },
  });
  return res;
};
