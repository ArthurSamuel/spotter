/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, debounce, Menu, MenuItem } from "@mui/material";
import {
  AutocompleteContainer,
  AutocompleteInput,
  AutocompleteSuggestBody,
  AutocompleteValue,
  ButtonSelectContainer,
  Input,
  InputContainer,
} from "./Input.styles";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const InputRounded = () => {
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {
    setIsActive(true);
  };

  const handleOnBlur = () => {
    setIsActive(false);
  };

  return (
    <InputContainer active={isActive}>
      <Box display={"flex"} alignItems={"center"} width={40}>
        <SearchIcon />
      </Box>
      <Input
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        placeholder="Search for flight, hotels and more"
      />
    </InputContainer>
  );
};

export interface IOptions {
  name: string;
  value: any;
}

interface InputSelectProps {
  value: any;
  options: IOptions[];
  icon?: React.ReactElement;
  onChange(value: any): void;
}

const InputSelect = ({ options, value, onChange, icon }: InputSelectProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item: IOptions) => {
    if (item.name) {
      setSelectedValue(item.name);
      onChange(item.value);
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    if (options) {
      let selectedValue = options[0].name;
      if (value) {
        const temp = options.find((item) => item.value === value);
        selectedValue = temp ? temp.name : selectedValue;
      }
      setSelectedValue(selectedValue);
    }
  }, [options, value]);

  return (
    <Box height={"50px"}>
      <ButtonSelectContainer onClick={(e) => handleClick(e)}>
        {icon && icon}
        {selectedValue}
        <ArrowDropDownIcon style={{ fontSize: 20 }} />
      </ButtonSelectContainer>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((item, index) => (
          <MenuItem key={index} onClick={() => handleClose(item)}>
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

const InputAutoComplete = ({
  placeholder,
  onChange,
  onClick,
  options,
  inputValue,
}: {
  placeholder: string;
  inputValue: string;
  options: IOptions[];
  onChange(value: string): void;
  onClick(value: IOptions): void;
}) => {
  const [shouldShowOptions, setShouldShowOptions] = useState(false);
  const shouldShowOptionsRef = useRef(shouldShowOptions);
  const [value, setValue] = useState<string>("");

  function handleClose() {
    if (shouldShowOptionsRef.current) {
      setShouldShowOptions(false);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  useEffect(() => {
    if (inputValue) {
      setValue(inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    shouldShowOptionsRef.current = shouldShowOptions;
  }, [shouldShowOptions]);

  const handleOnKeyUp = debounce((value: string) => {
    onChange(value);
  }, 250);

  const handleOnChange = (item: IOptions) => {
    setShouldShowOptions(false);
    onClick(item);
    setValue(item.name);
  };

  return (
    <Box width={"100%"} onClick={(e) => e.stopPropagation()}>
      <AutocompleteContainer>
        <AutocompleteInput
          placeholder={placeholder}
          onFocus={() => setShouldShowOptions(true)}
          onChange={(e) => {
            setValue(e.target.value);
            handleOnKeyUp(e.target.value);
          }}
          value={value}
        />
        <AutocompleteSuggestBody show={shouldShowOptions}>
          {options.map((item, index) => {
            return (
              <AutocompleteValue
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  handleOnChange(item);
                }}
              >
                {item.name}
              </AutocompleteValue>
            );
          })}
        </AutocompleteSuggestBody>
      </AutocompleteContainer>
    </Box>
  );
};

export { InputRounded, InputSelect, InputAutoComplete };
