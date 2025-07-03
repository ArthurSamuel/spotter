import Http from "../../core/Http";
import type { IAuth } from "./auth.type";

export const getAccessToken = async () => {
  const res = await Http.post<IAuth>({
    url: "https://test.api.amadeus.com/v1/security/oauth2/token",
    data: {
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_CLIENT_ID,
      client_secret: import.meta.env.VITE_SECRET,
    },
  });
  return res;
};
