"use client";

import React, { useEffect, useId, useState } from "react";
import { ThemeProvider } from "next-themes";

import Select from "react-select";

interface OptionData {
  value: string;
  label: string;
}

interface Props {
  area?: boolean;
  status?: boolean;
  options: OptionData[];
}

export default function SelectBox({ area, options }: Props) {
  const placeholder = area ? "지역 선택" : "구인 상태";
  const id = useId();

  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "110px",
      height: "42px",
      borderRadius: "50px",
      borderColor: "#676767",
      fontSize: "14px",
      textAlign: "center",
      cursor: "pointer",
    }),
    menu: (provided: any) => ({
      ...provided,
      width: "110px",
      fontSize: "14px",
      marginTop: "0px",
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
      />
    </ThemeProvider>
  );
}
