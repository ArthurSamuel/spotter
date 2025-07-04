import { Box, Grid, Typography } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import { CardWithImage } from "../../../../components/card/Card";
import LeafletMap from "../../../../components/map/Map";
import {
  CardTitleText,
  CardDescText,
} from "../../../../components/card/Card.styles";
import { useNavigate } from "react-router";

export default function Popular() {
  const navigate = useNavigate();

  const data = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTWMddtfl8DKtHnFOZPn5EE4cLUdwo0diCGF3vf0B4nynXSkWWGDF3khKRcCA3mIlxZAZrn-7K-W7fOTMAuZk4UanGDvdKNvjH8exVg",
      title: "Melbourne",
      desc: "Art, museums & Royal Botanic Gardens",
      date: "1–9 Sept",
      flight: "EUR 395",
      hotel: "EUR 140",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlH5MbmG1tUedok-MGUIXrox4ltiXdCFvYkm7nHOUC3jHOLi4NU4rFw65SLe1m8OaLbvvoY2FbfM7Xwn7YcUwcPMqIZw7zQn-_RQ8tOg",
      title: "Sydney",
      desc: "Sydney Opera House & Bondi Beach surfing",
      date: "27 Nov – 3 Dec",
      flight: "EUR 524",
      hotel: "EUR 289",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNrhkTrVENtS-5Kvx51_OAcYhZIeUALwxhARocDXXSG91YQQN9RSLIHlyDbpm_ZzB0ZBxQ2PKbNYQ2wCOKhqAnexHsZU6JVdM696GbA",
      title: "Perth",
      desc: "Beaches, Kings Park & Fremantle port",
      date: "6–13 Nov",
      flight: "EUR 265",
      hotel: "EUR 194",
    },
  ];

  const handleOnClick = () => {
    navigate("/flight");
  };

  return (
    <Box>
      <Typography fontWeight={500} variant="h5">
        Popular destinations
      </Typography>
      <Typography variant="caption" color="#5f6367">
        Based on your location in Denpasar
      </Typography>
      <Grid container width={"100%"} mt={1} spacing={2}>
        <Grid
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
        >
          {data.map((item, index) => (
            <Box key={index}>
              <CardWithImage
                imageUrl={item.src}
                onClick={() => handleOnClick()}
              >
                <Box p={2}>
                  <CardTitleText>{item.title}</CardTitleText>
                  <Box marginTop={-0.9}>
                    <CardDescText>{item.date}</CardDescText>
                  </Box>
                  <Box marginTop={-0.9}>
                    <CardDescText>{item.desc}</CardDescText>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-end"}
                    mt={1}
                  >
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                      <FlightIcon style={{ fontSize: 20 }} />
                      <CardTitleText>{item.flight}</CardTitleText>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                      <HotelIcon style={{ fontSize: 20 }} />
                      <CardTitleText>{item.hotel}</CardTitleText>
                    </Box>
                  </Box>
                </Box>
              </CardWithImage>
            </Box>
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box height={"100%"} borderRadius={5}>
            <LeafletMap />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
