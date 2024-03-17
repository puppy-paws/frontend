"use client";

import React, { ChangeEvent, useState } from "react";
import * as styles from "./_style/postCommons.css";
import { useSetRecoilState } from "recoil";
import { convertedValuesState } from "@/app/_store/community/atoms";
import { ConvertedValues } from "@/app/_types/community";

export default function IntroductionTextArea() {
  const [text, setText] = useState("");
  const setConvertedValues = useSetRecoilState(convertedValuesState);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);

    setConvertedValues((prevValues: ConvertedValues) => ({
      ...prevValues,
      textarea: newText.length > 0,
    }));
  };

  return (
    <textarea
      className={styles.contents}
      value={text}
      onChange={handleChange}
      placeholder="산책 도우미께 드리고 싶은 말 (최대 30자)"
      maxLength={30}
    />
  );
}
