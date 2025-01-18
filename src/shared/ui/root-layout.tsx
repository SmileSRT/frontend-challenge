import type { FC, PropsWithChildren } from "react";
import Header from "./header";
import styles from "./styles/layout.module.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default RootLayout;
