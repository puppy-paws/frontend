"use client";

import SelectBox from "./SelectBox";
import Filter from "@/app/_assets/images/filter.svg";
import * as styles from "./_style/post.css";
import { useRouter } from "next/navigation";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchCommunityPostState } from "@/app/_store/community/atoms";
import { produce } from "immer";
import { LOCATION_OPTIONS, STATUS_OPTIONS } from "@/app/_const/selectOptions";
import SearchValueClearButton from "@/app/_assets/images/image-delete-button.svg";

export default function CommunityHeader() {
  const [searchValue, setSearchValue] = useState("");
  const [searchDogTypeValue, setSearchDogTypeValue] = useState("");
  const [selectedAreaOption, setSelectdAreaOption] = useState("");
  const [selectedStatusOption, setSelectdStatusOption] = useState("");
  const setSearchCommunityPostState = useSetRecoilState(
    searchCommunityPostState
  );
  const userProfile = useGetUserProfile();
  const { dogName } = userProfile.userProfile?.member || {};
  const router = useRouter();

  const handleMovePostWriting = () => {
    dogName !== null && dogName !== undefined && dogName !== ""
      ? router.push("/community/writing")
      : toast.error("반려견 프로필을 등록해주세요.");
  };

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    setSearchValue(value);
    setSearchDogTypeValue(value);
  };

  const handleClearSearchValue = () => {
    setSearchValue("");
    setSearchDogTypeValue("");
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
          options={LOCATION_OPTIONS}
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
          placeholder={"견종을 검색해주세요."}
          value={searchValue}
          onChange={(e) => {
            handleChangeSearchValue(e);
          }}
        />
        <SearchValueClearButton
          onClick={() => handleClearSearchValue()}
          className={styles.searchValueClearButton}
        />
      </div>
      <div onClick={handleMovePostWriting} className={styles.postCreate}>
        글쓰기
      </div>
    </div>
  );
}
