"use client";

import React, { useEffect, useId, useState } from "react";
import { ThemeProvider } from "next-themes";
import * as styles from "./_style/postCommons.css";
import Select from "react-select";
import { global } from "@/app/globaltheme.css";
import { ConvertedPostValues } from "@/app/_types/community";
import { convertedPostValuesState } from "@/app/_store/community/atoms";
import { useSetRecoilState } from "recoil";

export default function LocationSelectBox() {
  const id = useId();

  const [isMount, setMount] = useState(false);
  const setConvertedValues = useSetRecoilState(convertedPostValuesState);

  const areaOptions = [
    { value: "전체", label: "전체" },
    { value: "강동구", label: "강동구" },
    { value: "강서구", label: "강서구" },
  ];

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return (
      <div className={styles.activeInput}>원하는 픽업 위치를 선택해주세요.</div>
    );
  }

  const handleSelectboxChange = () => {
    setConvertedValues((prevValues: ConvertedPostValues) => ({
      ...prevValues,
      selectbox: true,
    }));
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "252px",
      height: "42px",
      borderRadius: "10px",
      borderColor: "#000000",
      fontSize: "14px",
      cursor: "pointer",
      paddingLeft: "12px",
      marginLeft: "32px",
      backgroundColor: global.innerColor.color,
      ":hover": {
        backgroundColor: global.active.color,
        borderColor: "#676767",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      width: "252px",
      fontSize: "14px",
      marginTop: "0px",
      borderRadius: "10px",
      marginLeft: "32px",
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
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      display: "none",
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
        isSearchable={true}
        options={areaOptions}
        placeholder={"원하는 픽업 위치를 선택해주세요."}
        styles={customStyles}
        onChange={handleSelectboxChange}
      />
    </ThemeProvider>
  );
}
