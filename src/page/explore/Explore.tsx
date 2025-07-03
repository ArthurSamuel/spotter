import LeafletMap from "../../components/map/Map";
import { Container, LeftSide, RightSide } from "./Explore.styles";
import Recomended from "./features/recomended/Recomended";
import TicketPersonalSearch from "../../feature/search/Search";
import { Box } from "@mui/material";

export default function ExplorePage() {
  return (
    <Container>
      <LeftSide>
        <Box p={1}>
          <TicketPersonalSearch />
        </Box>
        <Recomended />
      </LeftSide>
      <RightSide>
        <LeafletMap />
      </RightSide>
    </Container>
  );
}
