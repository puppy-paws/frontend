"use client";

import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import * as styles from "./_style/postCommons.css";
import { useSetRecoilState } from "recoil";
import { convertedPostValuesState } from "@/app/_store/community/atoms";
import { ConvertedPostValues, PostWritingInfo } from "@/app/_types/community";
import { produce } from "immer";

type setIntroductionProps = {
  setPostWritingInfo: Dispatch<SetStateAction<PostWritingInfo>>;
};

export default function IntroductionTextArea({
  setPostWritingInfo,
}: setIntroductionProps) {
  const [text, setText] = useState("");
  const setConvertedValues = useSetRecoilState(convertedPostValuesState);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const introductionValue = event.target.value;
    setText(introductionValue);

    setPostWritingInfo((prevPostWritingInfo: PostWritingInfo) =>
      produce(prevPostWritingInfo, (draft) => {
        draft.description = introductionValue;
      })
    );

    setConvertedValues((prevValues: ConvertedPostValues) =>
      produce(prevValues, (draft) => {
        draft.textarea = introductionValue.length > 0;
      })
    );
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
