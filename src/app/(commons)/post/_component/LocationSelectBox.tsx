"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useId,
  useState,
} from "react";
import { ThemeProvider } from "next-themes";
import * as styles from "./_style/postCommons.css";
import Select, { SingleValue } from "react-select";
import { global } from "@/app/globaltheme.css";
import {
  ConvertedPostValues,
  LocationOption,
  PostWritingInfo,
} from "@/app/_types/community";
import { convertedPostValuesState } from "@/app/_store/community/atoms";
import { useSetRecoilState } from "recoil";
import { produce } from "immer";

type SetLocationOptionProps = {
  setPostWritingInfo: Dispatch<SetStateAction<PostWritingInfo>>;
  locationValue?: string;
};

export default function LocationSelectBox({
  setPostWritingInfo,
  locationValue,
}: SetLocationOptionProps) {
  const id = useId();

  const [isMount, setMount] = useState(false);
  const setConvertedValues = useSetRecoilState(convertedPostValuesState);
  const [sameIndex, setSameIndex] = useState(-1);
  const locationOptions: LocationOption[] = [
    { value: "전체", label: "전체" },
    { value: "강동구", label: "강동구" },
    { value: "강서구", label: "강서구" },
    { value: "마포구", label: "마포구" },
  ];

  useEffect(() => {
    if (locationValue) {
      const findSameLocationIndex = locationOptions.findIndex(
        (value) => value.value === locationValue
      );

      if (findSameLocationIndex !== sameIndex) {
        setSameIndex(findSameLocationIndex);
        setPostWritingInfo((prevValue: PostWritingInfo) =>
          produce(prevValue, (draft) => {
            draft.pickup_location =
              locationOptions[findSameLocationIndex].value;
          })
        );
        setConvertedValues((prevValue: ConvertedPostValues) =>
          produce(prevValue, (draft) => {
            draft.selectbox = true;
          })
        );
      }
    }
  }, [locationValue, sameIndex]);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return (
      <div className={styles.activeInput}>원하는 픽업 위치를 선택해주세요.</div>
    );
  }

  const handleSelectboxChange = (
    selectedOption: SingleValue<LocationOption>
  ) => {
    setPostWritingInfo((prevValue: PostWritingInfo) =>
      produce(prevValue, (draft) => {
        draft.pickup_location = selectedOption?.value || "";
      })
    );

    setConvertedValues((prevValue: ConvertedPostValues) =>
      produce(prevValue, (draft) => {
        draft.selectbox = true;
      })
    );
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
        defaultValue={locationValue ? locationOptions[sameIndex] : null}
        isSearchable={true}
        options={locationOptions}
        placeholder={"원하는 픽업 위치를 선택해주세요."}
        styles={customStyles}
        onChange={handleSelectboxChange}
      />
    </ThemeProvider>
  );
}
