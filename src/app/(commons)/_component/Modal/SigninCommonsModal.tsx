"use client";

import * as styles from "./_style/signinCommonsModal.css";
import KakaoSignin from "@/app/_assets/images/kakao.svg";
import GoogleSignin from "@/app/_assets/images/google.svg";
import DogLogo from "@/app/_assets/images/dogLogoImg.svg";
import MainLogo from "@/app/_assets/images/Logo.svg";
import CloseButton from "@/app/_assets/images/Xbutton.svg";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { getRefreshToken } from "@/app/_apis/commonsApi";

export default function SigninCommonsModal() {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };

  const handleOnClickTest = async () => {
    try {
      const response = await getRefreshToken("token/refresh");
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("토큰 에러", error);
      throw error;
    }
  };

  const handleKakaoSignIn = () => {
    router.push(
      `${process.env.NEXT_PUBLIC_OAUTH2_BASE_URL}/oauth2/authorization/kakao`
    );
  };

  const handleGoogleSignIn = () => {
    router.push(
      `${process.env.NEXT_PUBLIC_OAUTH2_BASE_URL}/oauth2/code/google`
    );
  };

  return (
    <div className={styles.blurContainer}>
      <div className={styles.modalContainer}>
        <div className={styles.leftContainer}>
          <MainLogo />
          <div className={styles.signinContainer}>
            <KakaoSignin
              className={styles.signinButton}
              onClick={handleKakaoSignIn}
            />
            <GoogleSignin className={styles.signinButton} />
          </div>
        </div>

        <div className={styles.rightContainer}>
          <DogLogo />
          {/* <CloseButton className={styles.closeButton} onClick={handleOnClick} /> */}
          <CloseButton
            className={styles.closeButton}
            onClick={handleOnClickTest}
          />
        </div>
      </div>
    </div>
  );
}
