import { Metadata } from "next";
import { ReactNode } from "react";
import * as styles from "./main.css";

export const metadata: Metadata = {
  title: "반려견 산책 도우미를 구인해보세요 !",
  description: "Community to recruit dog walkers",
};

type Props = { children: ReactNode };
export default function Layout({ children }: Props) {
  return <div>{children}</div>;
}
