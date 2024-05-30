import { Metadata } from "next";
import { ReactNode } from "react";
import Header from "../(commons)/_component/Header";
import RecoilRootProvider from "../(commons)/_component/RecoilProvider";
import RQProvider from "../(commons)/_component/RQProvider";
import * as styles from "./main.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "반려견 산책 도우미를 구인해보세요 !",
  description: "Community to recruit dog walkers",
};

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      <RecoilRootProvider>
        <RQProvider>
          <ToastContainer position="top-center" autoClose={1500} />
          <Header />
          {modal}
          {children}
        </RQProvider>
      </RecoilRootProvider>
    </div>
  );
}
