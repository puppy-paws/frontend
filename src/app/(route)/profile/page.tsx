"use client";

import InputImage from "@/app/_assets/images/input-image.svg";
import { ChangeEvent, useEffect, useState } from "react";
import * as styles from "./_component/_style/profile.css";
import { useSetRecoilState } from "recoil";
import { convertedProfileValuesState } from "@/app/_store/profile/atoms";
import { ConvertedProfileValues } from "@/app/_types/profile";
import CompleteButton from "@/app/(commons)/_component/CompleteButton";

export default function Profile() {
  const [isduplication, setIsduplication] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const setConvertedValues = useSetRecoilState(convertedProfileValuesState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailRegex.test(inputValue);

    setEmail(inputValue);

    if (isValid) {
      setIsEmailValid(true);

      setConvertedValues((prevValues: ConvertedProfileValues) => ({
        ...prevValues,
        email: true,
      }));
    } else {
      setIsEmailValid(false);
    }
  };

  const handleOnClick = () => {
    // if ("중복 안되면") {
    //   setIsduplication(false);
    // } else if ("중복 안되면") {
    //   setIsduplication(true);
    // }
    setConvertedValues((prevValues: ConvertedProfileValues) => ({
      ...prevValues,
      nickname: true,
    }));
    setIsduplication(true);
    setShowMessage(true);
  };

  useEffect(() => {
    if (isduplication && isEmailValid) {
      console.log("조건 부합");
    } else {
      console.log("조건 불합");
    }
  }, [isEmailValid, isduplication]);

  return (
    <main className={styles.container}>
      <section>
        <h2 style={{ textAlign: "center" }}>등록</h2>
        <div className={styles.inputImage}>
          <InputImage />
        </div>
      </section>
      <section className={styles.contentsContainer}>
        <div>
          <div className={styles.titleContainer}>
            <h3>닉네임</h3>
            {showMessage && (
              <span
                className={
                  isduplication ? styles.informationMent : styles.warningMent
                }
              >
                {isduplication
                  ? "사용 가능한 닉네임입니다."
                  : "이미 존재하는 닉네임 입니다."}
              </span>
            )}
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="닉네임을 입력하세요."
              onChange={(e) => setNickname(e.target.value)}
            ></input>
            <button
              className={styles.duplicationButton}
              onClick={handleOnClick}
            >
              중복확인
            </button>
          </div>
        </div>

        <div>
          <h3>이메일</h3>
          <input
            className={styles.input}
            placeholder="이메일을 입력하세요."
            onChange={handleChange}
          ></input>
        </div>
      </section>
      <button className={styles.addDogProfileButton}>+반려견 정보 추가</button>
      <CompleteButton recoilState={convertedProfileValuesState} />
    </main>
  );
}
