"use client";

import * as styles from "./_style/postDetails.css";
import { useRecoilValue } from "recoil";
import { convertedValuesState } from "@/app/_store/community/atoms";
import { useEffect } from "react";

interface props {
  text: string;
}

export default function Button({ text }: props) {
  const convertedValues = useRecoilValue(convertedValuesState);

  //   useEffect(() => {
  //     console.log(convertedValues);
  //   }, [convertedValues]);

  //   const isAllTrue = Object.values(convertedValues).every(
  //     (value) => value === true
  //   );

  //   const buttonClassName = isAllTrue
  //     ? styles.activeButton
  //     : styles.nonActiveButton;

  return <button className={styles.activeButton}>{text}</button>;
}
