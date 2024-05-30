"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import * as styles from "./_style/postCommons.css";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { convertedPostValuesState } from "@/app/_store/community/atoms";
import { ConvertedPostValues, PostWritingInfo } from "@/app/_types/community";
import { useSetRecoilState } from "recoil";
import { produce } from "immer";

type SetPickUpDateProps = {
  setPostWritingInfo: Dispatch<SetStateAction<PostWritingInfo>>;
};

export default function Calender({ setPostWritingInfo }: SetPickUpDateProps) {
  const [startDate, setStartDate] = useState<Date>();
  const setConvertedValues = useSetRecoilState(convertedPostValuesState);

  const handleCalenderChange = (date: Date) => {
    setConvertedValues((prevValue: ConvertedPostValues) =>
      produce(prevValue, (draft) => {
        draft.calender = true;
      })
    );

    setPostWritingInfo((prevValue: PostWritingInfo) =>
      produce(prevValue, (draft) => {
        draft.pickup_date = date;
      })
    );

    setStartDate(date);
  };

  const preventKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    event.preventDefault();
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
      onKeyDown={preventKeyDown}
    />
  );
}
