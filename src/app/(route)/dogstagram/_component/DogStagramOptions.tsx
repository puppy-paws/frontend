import Link from "next/link";
import * as styles from "./_style/dogStagramPost.css";
import Search from "@/app/_assets/images/search.svg";

export default function DogStagramOptions() {
  return (
    <div className={styles.options}>
      <div className={styles.selectBoxContainer}></div>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchBreed}
          type={"search"}
          placeholder={"견종을 검색해주세요."}
        ></input>
        <Search className={styles.searchLogo} />
      </div>
      <Link href={`/dogstagram/writing`} className={styles.postCreate}>
        글쓰기
      </Link>
    </div>
  );
}
