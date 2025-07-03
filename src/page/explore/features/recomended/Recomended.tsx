import { Box } from "@mui/material";
import { CardWithImage } from "../../../../components/card/Card";
import { CardTitleText } from "../../../../components/card/Card.styles";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import { useNavigate } from "react-router";

export default function Recomended() {
  const navigate = useNavigate();

  const data = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTWMddtfl8DKtHnFOZPn5EE4cLUdwo0diCGF3vf0B4nynXSkWWGDF3khKRcCA3mIlxZAZrn-7K-W7fOTMAuZk4UanGDvdKNvjH8exVg",
      title: "Melbourne",
      flight: "EUR 300",
      hotel: "EUR 150",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlH5MbmG1tUedok-MGUIXrox4ltiXdCFvYkm7nHOUC3jHOLi4NU4rFw65SLe1m8OaLbvvoY2FbfM7Xwn7YcUwcPMqIZw7zQn-_RQ8tOg",
      title: "Sydney",
      flight: "EUR 500",
      hotel: "IDR 280",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNrhkTrVENtS-5Kvx51_OAcYhZIeUALwxhARocDXXSG91YQQN9RSLIHlyDbpm_ZzB0ZBxQ2PKbNYQ2wCOKhqAnexHsZU6JVdM696GbA",
      title: "Perth",
      flight: "EUR 286",
      hotel: "EUR 194",
    },
  ];

  const handleOnClick = () => {
    navigate("/flight");
  };

  return (
    <Box display={"flex"} gap={2} flexDirection={"column"} p={2}>
      <Box width={"100%"} height={"1px"} bgcolor={"#dedede"} />
      {data.map((item, index) => (
        <CardWithImage
          key={index}
          imageUrl={item.src}
          onClick={() => handleOnClick()}
        >
          <Box
            p={1}
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box>
              <CardTitleText>{item.title}</CardTitleText>
            </Box>
            <Box
              mb={2}
              display={"flex"}
              alignItems={"flex-end"}
              flexDirection={"column"}
              gap={1}
            >
              <Box gap={1} display={"flex"} alignItems={"center"}>
                <FlightIcon style={{ fontSize: 14 }} />
                <CardTitleText>{item.flight}</CardTitleText>
              </Box>
              <Box gap={1} display={"flex"} alignItems={"center"}>
                <HotelIcon style={{ fontSize: 14 }} />
                <CardTitleText>{item.hotel}</CardTitleText>
              </Box>
            </Box>
          </Box>
        </CardWithImage>
      ))}
    </Box>
  );
}
