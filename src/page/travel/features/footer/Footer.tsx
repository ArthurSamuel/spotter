import { Box } from "@mui/material";
import { LinkText, Wrapper } from "./Footer.styles";
import { HideOnMobile } from "../../../flight_search/feature/ticket_results/TicketResults.styles";

export default function Footer() {
  const footerData = [
    {
      text: "About",
      url: "",
    },
    {
      text: "Privacy",
      url: "",
    },
    {
      text: "About",
      url: "",
    },
    {
      text: "Terms",
      url: "",
    },
    {
      text: "Join user studies",
      url: "",
    },
    {
      text: "Feedback",
      url: "",
    },
    {
      text: "Help",
      url: "",
    },
    {
      text: "Centre",
      url: "",
    },
  ];

  return (
    <Box paddingBottom={3}>
      <HideOnMobile>
        <Box width={"100%"} bgcolor={"#dedede"} height={"1px"} />
      </HideOnMobile>
      <Wrapper mt={1} display={"flex"} justifyContent={"center"} gap={2}>
        {footerData.map((item, index) => (
          <LinkText key={index}>{item.text}</LinkText>
        ))}
      </Wrapper>
    </Box>
  );
}
