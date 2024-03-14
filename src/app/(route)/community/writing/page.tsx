import * as styles from "./_component/_style/writing.css";
import InputImage from "@/app/_assets/images/input-image.svg";
import LocationSelectBox from "./_component/LocationSelectBox";
import Calender from "./_component/Calender";
import CompleteButton from "./_component/CompleteButton";
import IntroductionTextArea from "./_component/IntroductionTextArea";
import InputContainer from "./_component/InputContainer";
export default async function Writing() {
  return (
    <main className={styles.container}>
      <section>
        <h2 style={{ textAlign: "center" }}>게시물 등록</h2>
        <div className={styles.inputImage}>
          <InputImage />
        </div>
      </section>
      <section>
        <InputContainer labelText="이름">뽀삐</InputContainer>
        <InputContainer labelText="견종">요크셔테리어</InputContainer>
        <InputContainer labelText="위치" renderNonActiveInput={false}>
          <LocationSelectBox />
        </InputContainer>
        <InputContainer labelText="날짜" renderNonActiveInput={false}>
          <Calender />
        </InputContainer>
        <IntroductionTextArea />
        <CompleteButton />
      </section>
    </main>
  );
}
