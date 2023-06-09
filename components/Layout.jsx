import React, { Children } from "react";
import Head from "next/head";
import { Header } from "./Header";
import { useGlobalContext } from "../context/context";

const Layout = ({ children }) => {
  const { isLight } = useGlobalContext()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={ `${ isLight ? 'bg-slate-100 text-slate-900': 'bg-slate-950 text-slate-100'} pt-28` }>{children}</main>
    </>
  );
};

export default Layout;
