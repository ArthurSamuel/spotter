import { RouterProvider } from "react-router";
import route from "./route";
import "leaflet/dist/leaflet.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TokenRefreshContextFC from "./context/tokenRefresh/TokenRefreshContext";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 1000,
        refetchOnWindowFocus: false,
        retry: 3,
        retryDelay: 2000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TokenRefreshContextFC>
        <RouterProvider router={route} />
      </TokenRefreshContextFC>
    </QueryClientProvider>
  );
}

export default App;
