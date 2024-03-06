"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";
import LinkButton from "./LinkButton";
import * as styles from "./_style/header.css";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [url, setUrl] = useState("");

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    router.push(e.currentTarget.getAttribute("data-url") || "");
  };

  useEffect(() => {
    setUrl(pathname);
  }, [pathname]);

  return (
    <>
      <header className={styles.header}>
        <Image
          src={"/mainlogo.png"}
          width={103}
          height={31}
          alt="profile"
        ></Image>

        <div className={styles.menuContainer}>
          <LinkButton text="채팅" onClick={handleClick} url="/chat" />
          <LinkButton text="내 정보" onClick={handleClick} url="/myInfo" />
          <LinkButton text="로그인" onClick={handleClick} url="/signin" />
        </div>
      </header>
      <div className={styles.subHeader}>
        <div className={styles.linkContainer}>
          <LinkButton
            text="커뮤니티"
            onClick={handleClick}
            url="/community"
            isActive={pathname.startsWith("/community")}
          />
          <LinkButton
            text="견스타그램"
            onClick={handleClick}
            url="/dogstagram"
            isActive={pathname.startsWith("/dogstagram")}
          />
        </div>
      </div>
    </>
  );
}
