import BackButton from "@/app/(commons)/post/_component/BackButton";
import InputContainer from "@/app/(commons)/post/_component/InputContainer";
import UserProfile from "@/app/(commons)/_component/UserProfile";
import { formatTime } from "@/app/_utils/formatTime";
import Link from "next/link";
import StatusBadge from "../../_component/StatusBadge";
import Button from "./Button";
import * as styles from "./_style/postDetails.css";

interface Props {
  params: { community_id: string };
}

export default function PostDetails({ params }: Props) {
  const createTime = formatTime("2024-03-16 10:53:00");
  const communityId = params.community_id;
  const isMyself = true;
  const isComplete = true;

  return (
    <>
      <main className={styles.container}>
        <section className={styles.headerContainer}>
          <div className={styles.userInfoContainer}>
            <UserProfile />
            <p className={styles.createTime}>{createTime}</p>
          </div>
          <div className={styles.badge}>
            <StatusBadge />
          </div>
        </section>
        <section className={styles.postDetailContainer}>
          <img
            src={
              "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
            }
            alt={`Dog`}
            className={styles.dogImage}
          />
          <div className={styles.contentsContainer}>
            <h2 style={{ textAlign: "center" }}>반려견 정보</h2>
            <InputContainer labelText="이름">뽀삐</InputContainer>
            <InputContainer labelText="견종">요크셔테리어</InputContainer>
            <InputContainer labelText="위치">서울 강서구</InputContainer>
            <InputContainer labelText="날짜">03월 25일 2024년</InputContainer>
            <div className={styles.contents}>
              공원 뛰는 걸 진짜 좋아해요 다른 곳 아니어도 공원만 가면 돼요
            </div>
          </div>
        </section>

        <section className={styles.buttonContainer}>
          {isMyself ? (
            <>
              <Button text={"삭제"} />
              <Link href={"edit"} className={styles.activeButton}>
                수정
              </Link>
            </>
          ) : isComplete ? (
            <button className={styles.jobCompletionButton}>구인완료</button>
          ) : (
            <Button text={"신청"} />
          )}

          <BackButton type={"box"} />
        </section>
      </main>
    </>
  );
}
