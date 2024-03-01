import { ReactNode } from "react";
import * as styles from "../main.css";

type Props = { children: ReactNode };
export default function Layout({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
