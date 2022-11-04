import Head from "next/head";
import React, { VFC } from "react";
import { Header } from "./Header";

type PropsType = {
  children: React.ReactNode;
  title?: string;
};

export const Layout: VFC<PropsType> = (props) => {
  const { children, title = "Salva Nextjs Template" } = props;

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
