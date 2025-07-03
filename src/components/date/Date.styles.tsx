import { Box, styled } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 50%;
    background-color: #dedede;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
  }

  &:hover::after {
    background-color: transparent;
  }
`;

export const WrapperInput = styled(Box)`
  border: 1px solid #dedede;
  height: 52px;
  border-radius: 1px;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperSingle = styled(Box)`
  border: 1px solid #dedede;
  padding: 15px;
  align-items: center;
  display: flex;
`;

export const Wrapper = styled(Box)`
  flex: 1;
  padding: 15px;
  border: 1px solid #dedede;

  &:hover:nth-child(1) {
    border: 1px solid #8a8a8a;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  &:hover:nth-child(2) {
    border: 1px solid #8a8a8a;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }

  &:nth-child(1) {
    border-right-color: transparent;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }

  &:nth-child(2) {
    border-left-color: transparent;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`;

export const WrapperMobileCallendar = styled(Box)`
  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
