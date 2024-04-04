import * as React from "react";
import * as styles from "./_style/completeButton.css";
import { RecoilValue, useRecoilValue } from "recoil";
import { emptyRecoilState } from "@/app/_store/commons/atoms";

interface Props<T> {
  recoilState?: RecoilValue<T>;
  isValid?: boolean;
}

export default function CompleteButton<T>({ recoilState, isValid }: Props<T>) {
  const convertedValues = useRecoilValue(recoilState || emptyRecoilState);

  const isAllTrue = Object.values(convertedValues).every(
    (value) => value === true
  );

  const buttonClassName =
    isAllTrue || isValid ? styles.activeButton : styles.nonActiveButton;

  return <button className={buttonClassName}>완료</button>;
}
