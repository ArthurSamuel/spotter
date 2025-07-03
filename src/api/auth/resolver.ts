import { useMutation } from "@tanstack/react-query";
import { getAccessToken } from "./service";
import type { IAuth } from "./auth.type";

export const useGetAccessToken = () => {
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: () => getAccessToken(),
    onSuccess: (e) => {
      const key = import.meta.env.VITE_KEY_TOKEN;
      const token: IAuth = {
        access_token: e.data.access_token,
        expires_in: e.data.expires_in,
        created_at: Date.now(),
      };
      localStorage.setItem(key, JSON.stringify(token));
    },
  });
};
