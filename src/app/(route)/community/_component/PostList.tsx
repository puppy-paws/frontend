import Link from "next/link";
import Image from "next/image";
import * as styles from "./_style/post.css";
import UserProfile from "../../../(commons)/_component/UserProfile";

export default function PostList() {
  const posts = Array.from({ length: 30 }, (_, idx) => idx);

  return (
    <div className={styles.container}>
      {posts.map((postIdx) => (
        <Link key={postIdx} href={"/"} className={styles.cardContainer}>
          <div className={styles.title}>
            <p className={styles.address}>서울 강동구</p>
            <p className={styles.status}>완료</p>
          </div>

          <div className={styles.mainImageContainer}>
            <img
              key={postIdx}
              src={
                "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
              }
              alt={`Dog ${postIdx}`}
              className={styles.dogImage}
            />
          </div>
          <p>강아지가 너무 온순하고 귀여워서 산책하기 쉬워요.</p>
          <hr />
          <div className={styles.cardInfo}>
            <UserProfile />
            <p>2024. 03. 01</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
