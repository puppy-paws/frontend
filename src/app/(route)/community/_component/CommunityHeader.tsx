"use client";

import SelectBox from "./SelectBox";
import Search from "@/app/_assets/images/search.svg";
import Filter from "@/app/_assets/images/filter.svg";
import * as styles from "./_style/post.css";
import { useRouter } from "next/navigation";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchCommunityPostState } from "@/app/_store/community/atoms";
import { produce } from "immer";

export default function CommunityHeader() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchDogTypeValue, setSearchDogTypeValue] = useState("");
  const [selectedAreaOption, setSelectdAreaOption] = useState("");
  const [selectedStatusOption, setSelectdStatusOption] = useState("");
  const setSearchCommunityPostState = useSetRecoilState(
    searchCommunityPostState
  );
  const userProfile = useGetUserProfile();
  const { dogName } = userProfile.userProfile?.member || {};
  const router = useRouter();

  // 데이터 추가 예정
  const AREA_OPTIONS = [
    { value: "", label: "전체" },
    { value: "강동구", label: "강동구" },
    { value: "강서구", label: "강서구" },
    { value: "마포구", label: "강서구" },
  ];

  const STATUS_OPTIONS = [
    { value: "", label: "전체" },
    { value: "N", label: "미완료" },
    { value: "Y", label: "완료" },
  ];

  const handleMovePostWriting = () => {
    dogName !== null
      ? router.push("/community/writing")
      : toast.error("반려견 프로필을 등록해주세요.");
  };

  const handleSearchIconClick = () => {
    setSearchDogTypeValue(searchInputValue);
  };

  useEffect(() => {
    setSearchCommunityPostState((prevState) =>
      produce(prevState, (draft) => {
        draft.searchDogTypeValue = searchDogTypeValue;
        draft.selectedAreaOption = selectedAreaOption;
        draft.selectedStatusOption = selectedStatusOption;
      })
    );
  }, [
    searchDogTypeValue,
    selectedAreaOption,
    selectedStatusOption,
    setSearchCommunityPostState,
  ]);

  return (
    <div className={styles.options}>
      <div className={styles.selectBoxContainer}>
        <Filter className={styles.filterLogo} />
        <SelectBox
          area
          options={AREA_OPTIONS}
          setValue={setSelectdAreaOption}
        />
        <SelectBox
          status
          options={STATUS_OPTIONS}
          setValue={setSelectdStatusOption}
        />
      </div>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBreed}
          type={"search"}
          placeholder={"견종을 검색해주세요."}
          onChange={(e) => {
            setSearchInputValue(e.target.value);
          }}
        ></input>
        <Search className={styles.searchLogo} onClick={handleSearchIconClick} />
      </div>
      <div onClick={handleMovePostWriting} className={styles.postCreate}>
        글쓰기
      </div>
    </div>
  );
}
