import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface InputContainer {
  active?: boolean;
}

export const InputContainer = styled(Box)<InputContainer>`
  border: 1px solid #dedede;
  padding: 10px;
  border-radius: 20px;
  box-shadow: ${(props) =>
    props.active
      ? "rgba(0, 0, 0, 0.35) 0px 5px 24px"
      : "rgba(0, 0, 0, 0.35) 0px 5px 15px"};
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

export const Input = styled.input`
  width: 100%;
  min-width: 270px;
  border: 0px;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

export const ButtonSelectContainer = styled.button`
  padding: 7px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 0px;
  background-color: transparent;

  &:hover {
    background-color: #dedede;
  }
`;

export const AutocompleteContainer = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
`;

export const AutocompleteInput = styled.input`
  border: 1px solid #dedede;
  height: 55px;
  border-radius: 7px;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AutocompleteSuggestBody = styled.div<{ show: boolean }>`
  width: 100%;
  background-color: rgb(231 229 229);
  border-radius: 10px;
  padding: 5px;
  margin-top: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: absolute;
  z-index: 99999;
  display: ${(props) => (props.show ? "inherit" : "none")};
  height: ${(props) => (props.show ? "auto" : "0px")};
  max-height: 200px;
  overflow-y: scroll;
`;

export const AutocompleteValue = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #dad3d3;
    border-radius: 10px;
  }
`;
