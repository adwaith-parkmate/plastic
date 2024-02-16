"use client";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import ThemeProvider from "./ThemeToggle/theme-provider";
import { store } from "@/app/store";
// import { SessionProvider, SessionProviderProps } from "next-auth/react";
export default function Providers({
  // session,
  children,
}: {
  // session: SessionProviderProps["session"];
  children: React.ReactNode;
}) {
  return (
    <>
      <ReduxProvider store={store}>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <SessionProvider session={session}> */}
          {children}
          {/* </SessionProvider> */}
        </ThemeProvider>
      </ReduxProvider>

    </>
  );
}
