import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import * as styles from "./_style/header.css";

export default function Header() {
  const pathname = headers().get("x-pathname") || "";
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
          <Link href={"/chat"}> 채팅 </Link>
          <Link href={"/myInfo"}> 내 정보 </Link>
          <Link href={"/signin"}> 로그인 </Link>
        </div>
      </header>
      <div className={styles.subHeader}>
        <div className={styles.linkContainer}>
          <Link
            href="/community"
            className={
              pathname.startsWith("/community")
                ? styles.activeLinkString
                : styles.linkString
            }
          >
            커뮤니티
          </Link>
          <Link
            href="/dogstagram"
            className={
              pathname.startsWith("/dogstagram")
                ? styles.activeLinkString
                : styles.linkString
            }
          >
            견스타그램
          </Link>
        </div>
      </div>
    </>
  );
}
