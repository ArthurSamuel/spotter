import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  border: 1px solid #dedede;
  flex-direction: column;

  &:nth-child(1) {
    border-top: 1px solid #dedede;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  &:last-child {
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`;

export const ImageAirlineLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageArrow = styled.div`
  width: 10vw;
  max-width: 100px;
  height: 2px;
  background-color: #dedede;
  margin-top: 10px;
`;

export const SmallText = styled.span`
  font-size: 12px;
  color: gray;
  font-weight: bold;
`;

export const ContainerDot = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 40px;
`;

export const DotBig = styled(Box)`
  height: 10px;
  width: 10px;
  border: 2px solid #c7c5c5;
  border-radius: 10px;
`;

export const DotSmall = styled(Box)`
  height: 4px;
  width: 4px;
  background-color: #c7c5c5;
  border-radius: 4px;
`;

export const DepartureText = styled(Box)`
  position: absolute;
  top: 10%;
  left: 12%;
  font-weight: 600;
`;

export const TravelText = styled(Box)`
  position: absolute;
  top: 50%;
  font-weight: 600;
  transform: translateY(-50%);
`;

export const ArrivalText = styled(Box)`
  position: absolute;
  bottom: 10%;
  left: 12%;
  font-weight: 600;
`;

export const LeftSideHeader = styled(Box)`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const HideOnMobile = styled(Box)`
  @media screen and (max-width: 840px) {
    display: none;
  }
`;

export const ShowOnMobile = styled(Box)`
  display: none;

  @media screen and (max-width: 840px) {
    display: inherit;
  }
`;

export const FlightInformationWrapper = styled(Box)`
  padding-left: 80px;

  @media screen and (max-width: 840px) {
    padding-left: 10px;
  }
`;
