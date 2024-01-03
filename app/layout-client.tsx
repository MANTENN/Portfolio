"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

export default function ThemeProvider({ children, ...props }) {
  useEffect(() => {
    // @ts-ignore: Unreachable code error
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    })
  }, [])
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
