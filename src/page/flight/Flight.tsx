import { Box, Typography } from "@mui/material";
import { WrapperLayout } from "../../layouts/Layout.styles";
import Search from "./features/search/Search";
import Tag from "../../components/tag/Tag";
import LeafletMap from "../../components/map/Map";
import Gallery from "./features/gallery/Gallery";
import { WrapperMap } from "./Flight.styles";

export default function FlightPage() {
  return (
    <WrapperLayout>
      <Box>
        <Search />
      </Box>
      <Box mt={7}>
        <Typography fontWeight={"bold"} variant="h6">
          Find cheap flights from Denpasar to anywhere
        </Typography>
      </Box>
      <Box mt={2} display={"flex"} gap={2}>
        <Box>
          <Tag active label="Denpasar" onClick={() => {}} />
        </Box>
        <Box>
          <Tag label="Praya" onClick={() => {}} />
        </Box>
      </Box>
      <WrapperMap mt={2} width={"100%"} borderRadius={5} overflow={"hidden"}>
        <LeafletMap />
      </WrapperMap>
      <Box mt={2}>
        <Gallery />
      </Box>
    </WrapperLayout>
  );
}
