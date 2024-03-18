"use client";

import * as styles from "./_style/completeButton.css";
import { RecoilValue, useRecoilValue } from "recoil";

interface Props<T> {
  recoilState: RecoilValue<T>;
}

export default function CompleteButton<T>({ recoilState }: Props<T>) {
  const convertedValues = useRecoilValue(recoilState);

  const isAllTrue = Object.values(convertedValues).every(
    (value) => value === true
  );

  const buttonClassName = isAllTrue
    ? styles.activeButton
    : styles.nonActiveButton;

  return <button className={buttonClassName}>완료</button>;
}
