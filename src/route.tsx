import { createBrowserRouter } from "react-router";
import Layouts from "./layouts/Layouts";
import TravelPage from "./page/travel/Travel";
import ExplorePage from "./page/explore/Explore";
import FlightPage from "./page/flight/Flight";
import FlightSearchPage from "./page/flight_search/FlightSearch";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        path: "/travel",
        element: <TravelPage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/flight",
        element: <FlightPage />,
      },
      {
        path: "/flight/search",
        element: <FlightSearchPage />,
      },
    ],
  },
]);

export default route;
