/* eslint-disable @next/next/no-img-element */
"use client";

import InputContainer from "@/app/(commons)/post/_component/InputContainer";
import * as styles from "./_style/postDetails.css";
import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import { communityDetailPostState } from "@/app/_store/community/atoms";
import { useRecoilValue } from "recoil";
import NullInputImage from "@/app/_assets/images/input-image.svg";

export const formatPickUpDate = (createdTime: string | Date): string => {
  dayjs.extend(utc);

  const pickUpDate: Dayjs = dayjs(createdTime).utc();
  return pickUpDate.format("DD일 MM월 YYYY년");
};

export default function DogInfoPostDetail() {
  const communityDetailPost = useRecoilValue(communityDetailPostState);

  const {
    dog_name: dogName,
    pickup_location: pickupLocation,
    dog_profile_url: dogProfileUrl,
    dog_type: dogType,
    description,
    pickup_date: pickUpDate,
  } = communityDetailPost;

  return (
    <section className={styles.postDetailContainer}>
      {dogProfileUrl === null || dogProfileUrl === "" ? (
        <div className={styles.inputImage}>
          <NullInputImage />
        </div>
      ) : (
        <img src={dogProfileUrl} alt={`Dog`} className={styles.dogImage} />
      )}

      <div className={styles.contentsContainer}>
        <h2 style={{ textAlign: "center" }}>반려견 정보</h2>
        <InputContainer labelText="이름">{dogName}</InputContainer>
        <InputContainer labelText="견종">{dogType}</InputContainer>
        <InputContainer labelText="위치">{pickupLocation}</InputContainer>
        <InputContainer labelText="날짜">
          {formatPickUpDate(pickUpDate)}
        </InputContainer>
        <div className={styles.contents}>{description}</div>
      </div>
    </section>
  );
}
