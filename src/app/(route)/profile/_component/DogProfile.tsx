import * as styles from "./_style/profile.css";
import InputImage from "@/app/_assets/images/input-image.svg";
import InputContainer from "@/app/(commons)/post/_component/InputContainer";
import DogPersonalities from "./DogPersonalities";

interface DogProfileProps {
  dogProfile: {
    dogName: string;
    dogType: string;
    dogCharacters: string[];
    dogProfileUrl: string;
  };
}

export default function DogProfile({ dogProfile }: DogProfileProps) {
  const { dogName, dogType, dogCharacters, dogProfileUrl } = dogProfile;

  console.log(dogCharacters);
  return (
    <section className={styles.puppyInfoContainer}>
      <div className={styles.puppyInfoTitleContainer}>
        <h3>반려견 정보</h3>
      </div>
      <InputContainer labelText="이름">{dogName}</InputContainer>
      <InputContainer labelText="견종">{dogType}</InputContainer>
      <div className={styles.dogPersonalityContainer}>
        <label className={styles.labelText}>성격</label>
        <div className={styles.dogPersonalitySubContainer}>
          {dogCharacters.map((dogCharacter, idx) => (
            <DogPersonalities key={idx} value={`#${dogCharacter}`} />
          ))}
        </div>
      </div>
      <div className={styles.dogImageContainer}>
        <label className={styles.labelText}>사진</label>
        {dogProfileUrl ? (
          <img
            src={dogProfileUrl}
            alt={`Dog`}
            className={styles.profileImage}
          />
        ) : (
          <div className={styles.dogInputImage}>
            <InputImage className={styles.profileImage} />
          </div>
        )}
      </div>
    </section>
  );
}
