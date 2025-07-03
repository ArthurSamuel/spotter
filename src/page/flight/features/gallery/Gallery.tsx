import { Box, Grid } from "@mui/material";
import {
  CardDescText,
  CardTitleText,
} from "../../../../components/card/Card.styles";
import { GalleryImage, WrapperImage } from "./Gallery,styles";
import { useNavigate } from "react-router";

export default function Gallery() {
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
      flight: "EUR 286",
      hotel: "EUR 194",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNrhkTrVENtS-5Kvx51_OAcYhZIeUALwxhARocDXXSG91YQQN9RSLIHlyDbpm_ZzB0ZBxQ2PKbNYQ2wCOKhqAnexHsZU6JVdM696GbA",
      title: "Perth",
      desc: "Beaches, Kings Park & Fremantle port",
      date: "6–13 Nov",
      flight: "EUR 286",
      hotel: "EUR 194",
    },
  ];

  const handleOnClick = () => {
    navigate("/flight");
  };

  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid key={index} size={{ xs: 12, md: 3 }} onClick={handleOnClick}>
          <WrapperImage borderRadius={3} overflow={"hidden"}>
            <GalleryImage src={item.src} />
          </WrapperImage>
          <Box p={1}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <CardTitleText>{item.title}</CardTitleText>
              <CardTitleText>{item.flight}</CardTitleText>
            </Box>
            <Box>
              <CardDescText>{item.date}</CardDescText>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
