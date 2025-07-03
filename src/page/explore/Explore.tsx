import LeafletMap from "../../components/map/Map";
import { Container, LeftSide, RightSide } from "./Explore.styles";
import Recomended from "./features/recomended/Recomended";
import { HideOnMobile } from "../flight_search/feature/ticket_results/TicketResults.styles";
import TicketPersonalSearch from "../../feature/search/Search";

export default function ExplorePage() {
  return (
    <Container>
      <LeftSide>
        <TicketPersonalSearch />
        <Recomended />
      </LeftSide>
      <HideOnMobile>
        <RightSide>
          <LeafletMap />
        </RightSide>
      </HideOnMobile>
    </Container>
  );
}
