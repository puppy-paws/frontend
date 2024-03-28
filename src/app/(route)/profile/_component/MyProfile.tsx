import * as styles from "./_style/profile.css";
import InputImage from "@/app/_assets/images/input-image.svg";
import Link from "next/link";
import DogProfile from "./DogProfile";
import MyPostList from "./MyPostList";
import ReadOnlyInput from "./ReadOnlyInput";

export default function MyProfile() {
  return (
    <main className={styles.container}>
      <section>
        <h2 style={{ textAlign: "center" }}>내 프로필</h2>
        <div className={styles.inputImage}>
          <InputImage className={styles.profileImage} />
        </div>
      </section>
      <section className={styles.contentsContainer}>
        <div className={styles.titleContainer}>
          <h3>닉네임</h3>
          <ReadOnlyInput>강아지는야옹야옹</ReadOnlyInput>
        </div>

        <div className={styles.titleContainer}>
          <h3>이메일</h3>
          <ReadOnlyInput>email@email.com</ReadOnlyInput>
        </div>

        <div className={styles.titleContainer}>
          <h3>내가 쓴 글</h3>
          <MyPostList />
        </div>
      </section>
      <DogProfile />
      <Link href={"profile/edit"} className={styles.activeButton}>
        수정
      </Link>
    </main>
  );
}
