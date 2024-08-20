"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useId,
  useState,
} from "react";
import { ThemeProvider } from "next-themes";

import Select, { SingleValue } from "react-select";

interface OptionData {
  value: string;
  label: string;
}

interface Props {
  area?: boolean;
  status?: boolean;
  options: OptionData[];
  setValue: Dispatch<SetStateAction<string>>;
}

export default function SelectBox({ area, options, setValue }: Props) {
  const placeholder = area ? "지역 선택" : "구인 상태";
  const id = useId();
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  const handleOptionChange = (selectedOption: SingleValue<OptionData>) => {
    selectedOption ? setValue(selectedOption.value) : setValue("");
  };

  return (
    <ThemeProvider attribute="class">
      <Select
        classNamePrefix={"custom-prefix"}
        instanceId={id}
        defaultValue={null}
        isSearchable={area ? true : false}
        name={area ? "area" : "status"}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        onChange={handleOptionChange}
      />
    </ThemeProvider>
  );
}

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: "115px",
    height: "42px",
    borderRadius: "50px",
    borderColor: "#676767",
    fontSize: "14px",
    textAlign: "center",
    cursor: "pointer",
    padding: "0px",
    whiteSpace: "nowrap",
    ":hover": {
      backgroundColor: "#FFD600",
      borderColor: "#676767",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    width: "115px",
    fontSize: "14px",
    marginTop: "0px",
    borderRadius: "10px",
  }),
  option: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    cursor: "pointer",
    borderRadius: "3px",
    textAlign: "center",
    color: "black",
    ":hover": {
      backgroundColor: "#FFD600",
      borderColor: "#676767",
    },
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: "0px",
    width: "25px",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "black",
    fontSize: "14px",
  }),
};
