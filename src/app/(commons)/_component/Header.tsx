"use client";

import { ACCESS_TOKEN } from "@/app/_const/const";
import token from "@/app/_utils/token";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import LinkButton from "./LinkButton";
import * as styles from "./_style/header.css";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isAccessToken = token.get(ACCESS_TOKEN) !== null ? false : true;

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    router.push(e.currentTarget.getAttribute("data-url") || "");
  };

  const handleSignOut: MouseEventHandler<HTMLButtonElement> = (e) => {
    token.clean(ACCESS_TOKEN);
    window.location.reload();
  };

  const showSubHeader = pathname === "/dogstagram" || pathname === "/community";

  return (
    <>
      <header className={styles.header}>
        <Image src={"/mainlogo.png"} width={103} height={31} alt="profile" />
        <div className={styles.menuContainer}>
          <LinkButton text="채팅" onClick={handleClick} url="/chat" />
          <LinkButton text="내 정보" onClick={handleClick} url="/profile" />
          {isAccessToken ? (
            <LinkButton text="로그인" onClick={handleClick} url="/signin" />
          ) : (
            <LinkButton text="로그아웃" onClick={handleSignOut} />
          )}
        </div>
      </header>

      {showSubHeader && (
        <div className={styles.subHeader}>
          <div className={styles.linkContainer}>
            <LinkButton
              text="커뮤니티"
              onClick={handleClick}
              url="/community"
              isActive={pathname === "/community"}
            />
            <LinkButton
              text="견스타그램"
              onClick={handleClick}
              url="/dogstagram"
              isActive={pathname === "/dogstagram"}
            />
          </div>
        </div>
      )}
    </>
  );
}
