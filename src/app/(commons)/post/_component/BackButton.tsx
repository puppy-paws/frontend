"use client";

import { useRouter } from "next/navigation";
import BackButtonLogo from "@/app/_assets/images/backButton.svg";
import * as styles from "@/app/(commons)/post/_component/_style/postCommons.css";

interface props {
  type: "box" | "logo";
}

export default function BackButton({ type }: props) {
  const router = useRouter();

  return (
    <>
      {type === "logo" ? (
        <BackButtonLogo
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.back();
          }}
        />
      ) : (
        <button
          className={styles.activeButton}
          style={{ marginTop: "10px" }}
          onClick={() => {
            router.back();
          }}
        >
          뒤로가기
        </button>
      )}
    </>
  );
}
