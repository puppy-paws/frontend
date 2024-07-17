"use client";

import { ACCESS_TOKEN } from "@/app/_const/const";
import cookie from "@/app/_utils/cookie";
import { CookieValueTypes } from "cookies-next";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import * as styles from "./_style/header.css";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [accessToken, setAccessToken] = useState<CookieValueTypes>("");

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    router.push(e.currentTarget.getAttribute("data-url") || "");
  };

  const handleSignOut: MouseEventHandler<HTMLButtonElement> = (e) => {
    cookie.remove(ACCESS_TOKEN);
    window.location.reload();
  };

  const showSubHeader = pathname === "/dogstagram" || pathname === "/community";

  useEffect(() => {
    const getAccessToken = cookie.get(ACCESS_TOKEN);

    setAccessToken(getAccessToken);
  }, [accessToken]);

  return (
    <>
      <header className={styles.header}>
        <Image src={"/mainlogo.png"} width={103} height={31} alt="profile" />
        <div className={styles.menuContainer}>
          <LinkButton text="채팅" onClick={handleClick} url="/chat" />

          {accessToken ? (
            <>
              <LinkButton text="내 정보" onClick={handleClick} url="/profile" />
              <LinkButton text="로그아웃" onClick={handleSignOut} />
            </>
          ) : (
            <LinkButton text="로그인" onClick={handleClick} url="/signin" />
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
