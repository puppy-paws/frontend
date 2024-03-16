import UserProfile from "@/app/(commons)/_component/UserProfile";
import StatusBadge from "./StatusBadge";
import * as styles from "./_style/post.css";

interface props {
  data: any;
}

export default function Post({ data }: props) {
  const text = `강아지가 너무 온순하고 귀여워서 산책하기 쉬워요.
    귀여운 리트리버 강아지가 너무쉬워요.
    행복하게 해주세요 !
  `;

  return (
    <>
      <div className={styles.mainImageContainer}>
        <img
          key={data}
          src={
            "https://images.dog.ceo//breeds//retriever-chesapeake//n02099849_3007.jpg"
          }
          alt={`Dog ${data}`}
          className={styles.dogImage}
        />
      </div>
      <StatusBadge />
      <div className={styles.contentsContainer}>
        <p className={styles.address}>서울 강동구</p>
        <div className={styles.contents}>{text}</div>
        <p className={styles.dogBreed}>#골든 리트리버</p>
        <div className={styles.cardInfo}>
          <UserProfile />
          <p className={styles.date}>2024. 03. 01</p>
        </div>
      </div>
    </>
  );
}
