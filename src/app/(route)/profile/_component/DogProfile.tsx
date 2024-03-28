import * as styles from "./_style/profile.css";
import InputImage from "@/app/_assets/images/input-image.svg";
import InputContainer from "@/app/(commons)/post/_component/InputContainer";
import DogPersonalities from "./DogPersonalities";

export default function DogProfile() {
  return (
    <section className={styles.puppyInfoContainer}>
      <div className={styles.puppyInfoTitleContainer}>
        <h3>반려견 정보</h3>
      </div>
      <InputContainer labelText="이름">뽀삐</InputContainer>
      <InputContainer labelText="견종">푸들</InputContainer>
      <div className={styles.dogPersonalityContainer}>
        <label className={styles.labelText}>성격</label>
        <div className={styles.dogPersonalitySubContainer}>
          <DogPersonalities value={"#너무귀여움"}></DogPersonalities>
          <DogPersonalities value={"#착함"}></DogPersonalities>
        </div>
      </div>
      <div className={styles.dogImageContainer}>
        <label className={styles.labelText}>사진</label>
        <div className={styles.dogInputImage}>
          <InputImage className={styles.profileImage} />
        </div>
      </div>
    </section>
  );
}
