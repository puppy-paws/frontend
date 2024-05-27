"use client";

import * as styles from "./_style/dogStagramPost.css";
import Search from "@/app/_assets/images/search.svg";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { searchDogStagramPostState } from "@/app/_store/dogstagram/atoms";
import { useSetRecoilState } from "recoil";

export default function DogStagramOptions() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const setSearchDogType = useSetRecoilState(searchDogStagramPostState);

  const handleMoveWritingPost = () => {
    router.push("/dogstagram/writing");
  };

  const handleOnClick = () => {
    setSearchDogType(inputValue);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    let searchDogType = e.target.value;
    setInputValue(searchDogType);
  };

  return (
    <div className={styles.options}>
      <div className={styles.selectBoxContainer}></div>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBreed}
          type={"search"}
          placeholder={"견종을 검색해주세요."}
          onChange={handleOnChange}
        />
        <Search className={styles.searchLogo} onClick={handleOnClick} />
      </div>
      <div className={styles.postCreate} onClick={handleMoveWritingPost}>
        글쓰기
      </div>
    </div>
  );
}
