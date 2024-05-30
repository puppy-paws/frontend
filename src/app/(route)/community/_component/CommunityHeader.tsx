"use client";

import SelectBox from "./SelectBox";
import Search from "@/app/_assets/images/search.svg";
import Filter from "@/app/_assets/images/filter.svg";
import * as styles from "./_style/post.css";
import { useRouter } from "next/navigation";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { toast } from "react-toastify";

export default function CommunityHeader() {
  const userProfile = useGetUserProfile();
  const { dogName } = userProfile.userProfile?.member || {};
  const router = useRouter();
  const areaOptions = [
    { value: "전체", label: "전체" },
    { value: "강동구", label: "강동구" },
    { value: "강서구", label: "강서구" },
  ];
  // 데이터 추가 예정

  const statusOptions = [
    { value: "전체", label: "전체" },
    { value: "미완료", label: "미완료" },
    { value: "완료", label: "완료" },
  ];

  const handleMovePostWriting = () => {
    dogName !== null
      ? router.push("/community/writing")
      : toast.error("반려견 프로필을 등록해주세요.");
  };

  return (
    <div className={styles.options}>
      <div className={styles.selectBoxContainer}>
        <Filter className={styles.filterLogo} />
        <SelectBox area options={areaOptions} />
        <SelectBox status options={statusOptions} />
      </div>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBreed}
          type={"search"}
          placeholder={"견종을 검색해주세요."}
        ></input>
        <Search className={styles.searchLogo} />
      </div>
      <div onClick={handleMovePostWriting} className={styles.postCreate}>
        글쓰기
      </div>
    </div>
  );
}
