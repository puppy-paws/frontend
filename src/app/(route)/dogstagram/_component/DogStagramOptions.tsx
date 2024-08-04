"use client";

import * as styles from "./_style/dogStagramPost.css";
import { useRouter } from "next/navigation";
import { searchDogStagramPostState } from "@/app/_store/dogstagram/atoms";
import { useSetRecoilState } from "recoil";
import SearchValueClearButton from "@/app/_assets/images/image-delete-button.svg";
import { useState } from "react";

export default function DogStagramOptions() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const setSearchDogType = useSetRecoilState(searchDogStagramPostState);

  const handleMoveWritingPost = () => {
    router.push("/dogstagram/writing");
  };

  const handleChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    setSearchValue(value);
    setSearchDogType(value);
  };

  const handleClearSearchValue = () => {
    setSearchValue("");
    setSearchDogType("");
  };

  return (
    <div className={styles.options}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBreed}
          placeholder={"견종을 검색해주세요."}
          onChange={handleChangeSearchValue}
          value={searchValue}
        />
        <SearchValueClearButton
          onClick={() => handleClearSearchValue()}
          className={styles.searchValueClearButton}
        />
      </div>
      <div className={styles.postCreate} onClick={handleMoveWritingPost}>
        글쓰기
      </div>
    </div>
  );
}
