import SelectBox from "./SelectBox";
import Search from "@/app/_assets/images/search.svg";
import Filter from "@/app/_assets/images/filter.svg";
import * as styles from "./_style/post.css";
import Link from "next/link";

export default function CommunityHeader() {
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
      <Link href={`/community/writing`} className={styles.postCreate}>
        글쓰기
      </Link>
    </div>
  );
}
