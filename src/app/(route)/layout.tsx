import { Metadata } from "next";
import { ReactNode } from "react";
import Header from "../(commons)/_component/Header";
import RecoilRootProvider from "../(commons)/_component/RecoilProvider";
import * as styles from "./main.css";

export const metadata: Metadata = {
  title: "반려견 산책 도우미를 구인해보세요 !",
  description: "Community to recruit dog walkers",
};

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      <RecoilRootProvider>
        <Header />
        {modal}
        {children}
      </RecoilRootProvider>
    </div>
  );
}
