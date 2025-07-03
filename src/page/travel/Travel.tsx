import { Box } from "@mui/material";
import Footer from "./features/footer/Footer";
import Popular from "./features/popular/Popular";
import Search from "./features/search/Search";
import { WrapperLayout } from "../../layouts/Layout.styles";
import { SearchWrapper } from "./Travel.styles";

export default function TravelPage() {
  return (
    <WrapperLayout>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <Box>
        <Popular />
      </Box>
      <Box mt={5}>
        <Footer />
      </Box>
    </WrapperLayout>
  );
}
