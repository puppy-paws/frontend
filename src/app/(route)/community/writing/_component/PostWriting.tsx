"use client";

import * as styles from "@/app/(commons)/post/_component/_style/postCommons.css";
import Calender from "@/app/(commons)/post/_component/Calender";
import InputContainer from "@/app/(commons)/post/_component/InputContainer";
import IntroductionTextArea from "@/app/(commons)/post/_component/IntroductionTextArea";
import LocationSelectBox from "@/app/(commons)/post/_component/LocationSelectBox";
import ButtonContainer from "./ButtonContainer";
import { useUploadedImages } from "@/app/_hooks/useUploadedFiles";
import InputImage from "@/app/(commons)/_component/InputImage";

export default function PostWriting() {
  const [uploadedImages, updateUploadedImages] = useUploadedImages();

  return (
    <main className={styles.container}>
      <section>
        <h2 style={{ textAlign: "center" }}>게시물 등록</h2>
        <InputImage updateUploadedFile={updateUploadedImages} />
      </section>
      <section className={styles.contentsContainer}>
        <InputContainer labelText="이름">뽀삐</InputContainer>
        <InputContainer labelText="견종">요크셔테리어</InputContainer>
        <InputContainer labelText="위치" renderNonActiveInput={false}>
          <LocationSelectBox />
        </InputContainer>
        <InputContainer labelText="날짜" renderNonActiveInput={false}>
          <Calender />
        </InputContainer>
        <IntroductionTextArea />
        <ButtonContainer />
      </section>
    </main>
  );
}
