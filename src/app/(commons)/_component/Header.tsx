import Image from "next/image";
import Link from "next/link";
import * as styles from "./_style/header.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={"/mainlogo.png"}
        width={103}
        height={31}
        alt="profile"
      ></Image>
      <div className={styles.linkContainer}>
        <Link href="/community">커뮤니티</Link>
        <Link href="/dogstagram">견스타그램</Link>
      </div>
      <div className={styles.menuContainer}>
        <Image
          src={"/testimg.png"}
          width={30}
          height={30}
          alt="profile"
        ></Image>
        <Image
          src={"/testimg.png"}
          width={30}
          height={30}
          alt="profile"
        ></Image>
        <Image
          src={"/testimg.png"}
          width={30}
          height={30}
          alt="profile"
        ></Image>
      </div>
    </header>
  );
}
