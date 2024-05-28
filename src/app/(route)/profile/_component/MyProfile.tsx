"use client";

import * as styles from "./_style/profile.css";
import InputImage from "@/app/_assets/images/input-image.svg";
import DogProfile from "./DogProfile";
import MyPostList from "./MyPostList";
import ReadOnlyInput from "./ReadOnlyInput";
import { useGetUserProfile } from "@/app/_service/profile/useGetUserProfile";
import { useRouter } from "next/navigation";

export default function MyProfile() {
  const userProfile = useGetUserProfile();
  const router = useRouter();
  const MyDogstagramPostList = userProfile?.userProfile?.dogstagrams || [];
  const MyCommunityPostList = userProfile?.userProfile?.communities || [];
  const {
    email,
    nickname,
    dogType,
    dogName,
    dogCharacters,
    dogProfileUrl,
    profileUrl,
  } = userProfile.userProfile?.member || {};
  const dogProfile = {
    dogType: dogType || "",
    dogName: dogName || "",
    dogCharacters: dogCharacters || [],
    dogProfileUrl: dogProfileUrl || "",
  };

  const isDogProfile = dogName ? true : false;

  const handleMoveEditProfile = () => {
    router.push("profile/edit");
  };

  return (
    <main className={styles.container}>
      <section>
        <h2 style={{ textAlign: "center" }}>내 프로필</h2>
        {profileUrl !== null ? (
          <img
            src={profileUrl}
            alt={`profile img`}
            className={styles.profileImage}
          />
        ) : (
          <div className={styles.inputImage}>
            <InputImage />
          </div>
        )}
      </section>
      <section className={styles.contentsContainer}>
        <div className={styles.titleContainer}>
          <h3>닉네임</h3>
          <ReadOnlyInput>{nickname}</ReadOnlyInput>
        </div>

        <div className={styles.titleContainer}>
          <h3>이메일</h3>
          <ReadOnlyInput>{email}</ReadOnlyInput>
        </div>

        <div className={styles.titleContainer}>
          <h3>내가 쓴 글</h3>
          <MyPostList
            dogStagram={MyDogstagramPostList}
            community={MyCommunityPostList}
          />
        </div>
      </section>
      {isDogProfile && <DogProfile dogProfile={dogProfile} />}
      <div onClick={handleMoveEditProfile} className={styles.activeButton}>
        수정
      </div>
    </main>
  );
}
