/* eslint-disable @next/next/no-img-element */
"use client";

import { ACCESS_TOKEN } from "@/app/_const/const";
import cookie from "@/app/_utils/cookie";
import { CookieValueTypes } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import * as styles from "./_style/header.css";

export default function Header() {
  const [accessToken, setAccessToken] = useState<CookieValueTypes>("");
  const router = useRouter();
  const pathname = usePathname();
  const showSubHeader = pathname === "/dogstagram" || pathname === "/community";

  const handleMovePage: MouseEventHandler<HTMLButtonElement> = (e) => {
    router.push(e.currentTarget.getAttribute("data-url") || "");
  };

  const handleMoveMainPage = () => {
    router.push("/community");
  };

  const handleSignOut: MouseEventHandler<HTMLButtonElement> = (e) => {
    cookie.remove(ACCESS_TOKEN);
    window.location.reload();
  };

  useEffect(() => {
    const getAccessToken = cookie.get(ACCESS_TOKEN);

    setAccessToken(getAccessToken);
  }, [accessToken]);

  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.mainLogoContainer}
          onClick={() => {
            handleMoveMainPage();
          }}
        >
          <img
            src="/mainlogo.png"
            style={{ width: "100%", height: "100%" }}
            alt={"main logo"}
          />
        </div>
        <div className={styles.menuContainer}>
          <LinkButton text="채팅" onClick={handleMovePage} url="/chat" />

          {accessToken ? (
            <>
              <LinkButton
                text="내 정보"
                onClick={handleMovePage}
                url="/profile"
              />
              <LinkButton text="로그아웃" onClick={handleSignOut} />
            </>
          ) : (
            <LinkButton text="로그인" onClick={handleMovePage} url="/signin" />
          )}
        </div>
      </header>

      {showSubHeader && (
        <div className={styles.subHeader}>
          <div className={styles.linkContainer}>
            <LinkButton
              text="커뮤니티"
              onClick={handleMovePage}
              url="/community"
              isActive={pathname === "/community"}
            />
            <LinkButton
              text="견스타그램"
              onClick={handleMovePage}
              url="/dogstagram"
              isActive={pathname === "/dogstagram"}
            />
          </div>
        </div>
      )}
    </>
  );
}
