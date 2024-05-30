"use client";

import CompleteButton from "@/app/(commons)/_component/CompleteButton";
import { convertedPostValuesState } from "@/app/_store/community/atoms";
import * as styles from "@/app/(commons)/post/_component/_style/postCommons.css";
import BackButton from "@/app/(commons)/post/_component/BackButton";

type Props = {
  handler: () => void;
};

export default function ButtonContainer({ handler }: Props) {
  return (
    <div className={styles.buttonContainer}>
      <CompleteButton
        handler={handler}
        recoilState={convertedPostValuesState}
      />
      <BackButton type={"logo"} />
    </div>
  );
}
