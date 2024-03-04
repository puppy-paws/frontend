"use client";

import Link from "next/link";
import * as styles from "./_style/post.css";
import UserProfile from "../../../(commons)/_component/UserProfile";
import SelectBox from "./SelectBox";
import Image from "next/image";
import Search from "@/app/_assets/images/search.svg";

export default function PostList() {
  const posts = Array.from({ length: 30 }, (_, idx) => idx);

  const areaOptions = [
    { value: "전체", label: "전체" },
    { value: "강동구", label: "강동구" },
    { value: "강서구", label: "강서구" },
  ];

  const statusOptions = [
    { value: "전체", label: "전체" },
    { value: "미완료", label: "미완료" },
    { value: "완료", label: "완료" },
  ];

  let status = "미완료"; // 서버에서 받아오는 데이터로 대체 예정

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.options}>
          <SelectBox className={styles.areaSelect} area options={areaOptions} />
          <SelectBox
            className={styles.statusSelect}
            status
            options={statusOptions}
          />
          <div className={styles.searchContainer}>
            <input
              className={styles.searchBreed}
              type={"search"}
              placeholder={"견종을 검색해주세요."}
            ></input>
            <Search className={styles.searchLogo} />
          </div>
          <button className={styles.postCreate}>글쓰기</button>
        </div>

        <div className={styles.container}>
          {posts.map((communityId) => (
            <Link
              key={communityId}
              href={`/community/${communityId}`}
              className={styles.cardContainer}
            >
              <div className={styles.mainImageContainer}>
                <img
                  key={communityId}
                  src={
                    "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
                  }
                  alt={`Dog ${communityId}`}
                  className={styles.dogImage}
                />
              </div>
              <p
                className={
                  status === "완료"
                    ? styles.completeStatus
                    : styles.incompleteStatus
                }
              >
                {status}
              </p>

              <div className={styles.contentsContainer}>
                <p className={styles.address}>서울 강동구</p>

                <p className={styles.contents}>
                  강아지가 너무 온순하고 귀여워서 산책하기 쉬워요.
                </p>

                <p className={styles.dogBreed}>#골든 리트리버</p>

                <div className={styles.cardInfo}>
                  <UserProfile />
                  <p>2024. 03. 01</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
