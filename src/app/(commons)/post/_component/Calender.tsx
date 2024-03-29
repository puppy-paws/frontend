"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import * as styles from "./_style/postCommons.css";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { convertedPostValuesState } from "@/app/_store/community/atoms";
import { ConvertedPostValues } from "@/app/_types/community";
import { useSetRecoilState } from "recoil";

export default function Calender() {
  const [startDate, setStartDate] = useState<null | Date>(null);
  const setConvertedValues = useSetRecoilState(convertedPostValuesState);

  const handleCalenderChange = (date: Date) => {
    setConvertedValues((prevValues: ConvertedPostValues) => ({
      ...prevValues,
      calender: true,
    }));
    setStartDate(date);
  };

  return (
    <DatePicker
      dateFormat="MM월 dd일 yyyy년"
      selected={startDate}
      minDate={new Date()}
      onChange={handleCalenderChange}
      placeholderText="원하는 날짜를 선택해주세요."
      className={styles.activeInput}
      locale={ko}
    />
  );
}
