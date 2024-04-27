"use client";

import * as styles from "./_style/signinCommonsModal.css";
import KakaoSignin from "@/app/_assets/images/kakao.svg";
import GoogleSignin from "@/app/_assets/images/google.svg";
import DogLogo from "@/app/_assets/images/dogLogoImg.svg";
import MainLogo from "@/app/_assets/images/Logo.svg";
import CloseButton from "@/app/_assets/images/Xbutton.svg";
import { useRouter } from "next/navigation";

export default function SigninCommonsModal() {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };
  return (
    <div className={styles.blurContainer}>
      <div className={styles.modalContainer}>
        <div className={styles.leftContainer}>
          <MainLogo />
          <div className={styles.signinContainer}>
            <KakaoSignin className={styles.signinButton} />
            <GoogleSignin className={styles.signinButton} />
          </div>
        </div>

        <div className={styles.rightContainer}>
          <DogLogo />
          <CloseButton className={styles.closeButton} onClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
}
