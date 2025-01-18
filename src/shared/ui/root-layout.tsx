import type { FC, PropsWithChildren } from "react";
import Header from "./header";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
