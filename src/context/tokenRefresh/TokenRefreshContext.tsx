/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from "react";
import { useGetAccessToken } from "../../api/auth/resolver";
import type { IAuth } from "../../api/auth/auth.type";

const tokenRefreshContextDefault = {};

export const TokenRefreshStateContext = React.createContext(
  tokenRefreshContextDefault
);

const TokenRefreshContextFC: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { mutateAsync } = useGetAccessToken();

  useEffect(() => {
    const refresh = async () => {
      const tempRawLocalStorage = localStorage.getItem(
        import.meta.env.VITE_KEY_TOKEN
      );
      if (!tempRawLocalStorage) {
        mutateAsync();
      } else {
        const token: IAuth = JSON.parse(tempRawLocalStorage);
        const createdAt = token.created_at;
        const expiresInSeconds = token.expires_in;
        const targetDate = new Date(createdAt + expiresInSeconds * 1000);
        const currentDate = new Date();
        if (currentDate > targetDate) {
          localStorage.clear();
          await mutateAsync();
          window.location.reload();
        }
      }
    };

    refresh();
  }, [mutateAsync]);

  return (
    <TokenRefreshStateContext.Provider value={{}}>
      {children}
    </TokenRefreshStateContext.Provider>
  );
};

export default TokenRefreshContextFC;
